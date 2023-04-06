const { users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, password, avatar, fullname } = req.body;

  try {
    const existedUser = await users.findOne({ where: { username: name } });

    if (!name || !password || !fullname) {
      res.status(401).send({ message: "Some fields are missing 🤔" });
    } else if (existedUser) {
      res.status(401).send({ message: "This user already existed 🤧" });
    }
    await bcrypt.hash(password, 10).then((hash) => {
      users.create({
        username: name,
        avatar: avatar,
        fullname: fullname,
        password: hash,
      });
    });

    await res.json({ message: "Sign up success 🥳" });
  } catch (error) {
    res.status(401).send({ message: `${error}` });
  }
};

exports.signin = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password)
    res.status(401).send({ message: "Something is missing 😢" });

  const user = await users.findOne({ where: { username: name } });

  if (!user)
    return res.status(401).json({ message: "Can not find your account!" });

  //   using bcrypt to compare two password : 1 is from user request, 2 from DB
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong username or password " });

    const tokenPayload = {
      username: user.username,
      avatar: user.avatar,
      fullname: user.fullname,
      id: user.id,
    };

    const accessToken = sign(tokenPayload, "secret", {
      expiresIn: "24h",
    });

    const { password, ...rest } = user.dataValues;

    const d = new Date();
    const hour = d.getUTCHours();

    if (accessToken) {
      return res.status(200).json({
        token: accessToken,
        message: "Signin success 🥳",
        expiresIn: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
    } else {
      return res.status(401).json({
        message: "Please Login 😢",
      });
    }
  });
};

exports.getUserProfile = async (req, res) => {
  const userProfile = req.user;

  if (!userProfile)
    return res.status(401).send({ message: "Can not find your account 🤧" });

  return res.status(200).send({ ...userProfile });
};
