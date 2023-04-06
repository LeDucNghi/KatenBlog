const express = require("express");
const router = express.Router();

const { signup, signin, getUserProfile } = require("../controllers/users");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { users } = require("../models");

// SIGN UP
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GET USER PROFILE
router.get("/profile", validateToken, getUserProfile);

// UPDATE USER PROFILE
router.put("/profile/update/:userId", validateToken, async (req, res) => {
  const userId = req.params.userId;
  const { fullname, username, avatar } = req.body;
  if (!req.body || !userId) {
    res.status(401).send({ message: "Something is missing 🤔" });
  }

  const newProfile = await users.update(
    {
      fullname,
      username,
      avatar,
    },
    { where: { id: userId } }
  );

  res.status(200).send({ fullname, username, avatar });
});

router.get("/profile/comment/:userId", async (req, res) => {
  const userId = req.params.userId;

  const userProfile = await users.findByPk(userId, {
    attributes: { exclude: ["password"] },
  });

  res.json({ userProfile });
});

module.exports = router;
