const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { name, password, avatar, fullname } = req.body;

  try {
    const existedUser = await Users.findOne({ where: { username: name } });

    if (!name || !password || !fullname) {
      res.status(401).send({ message: "Some fields are missing 🤔" });
    } else if (existedUser) {
      res.status(401).send({ message: "This user already existed 🤧" });
    }
    await bcrypt.hash(password, 10).then((hash) => {
      Users.create({
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
});

router.post("/signin", async (req, res) => {
  const { name, password } = req.body;

  const user = await Users.findOne({ where: { username: name } });

  if (!user) res.json({ message: "Can not find your account!" });

  //   using bcrypt to compare two password : 1 is from user request, 2 from DB
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong username & password combination" });

    const accessToken = sign({ name: user.name, id: user.id }, "important");

    const { password, ...rest } = user.dataValues;

    res.json({ token: accessToken, ...rest, message: "Signin success 🥳" });
  });
});

module.exports = router;
