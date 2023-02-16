const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { username, password, avatar } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: username,
      avatar: avatar,
      password: hash,
    });
  });

  res.json("Sign up success");
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { name: username } });

  if (!user) res.json({ message: "Can not find your account!" });

  //   using bcrypt to compare two password : 1 is from user request, 2 from DB
  bcrypt.compare(password, user.password).then((match) => {
    if (!match) res.json({ error: "Wrong username & password combination" });

    const accessToken = sign({ name: user.name, id: user.id }, "important");

    const { password, ...rest } = user.dataValues;

    res.json({ token: accessToken, ...rest });
  });
});

module.exports = router;
