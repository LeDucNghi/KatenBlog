const express = require("express");
const router = express.Router();

const { signup, signin, getUserProfile } = require("../controllers/Users");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { Users } = require("../models");

// SIGN UP
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GET USER PROFILE
router.get("/profile", validateToken, getUserProfile);

// UPDATE USER PROFILE
router.put("/update/:userId", validateToken, async (req, res) => {
  const userId = req.params.userId;
  const { fullname, username, avatar } = req.body;
  if (!req.body || !id) {
    res.status(401).send({ message: "Something is missing 🤔" });
  }

  await Users.update(
    {
      fullname,
      username,
      avatar,
    },
    { where: { id: userId } }
  );
});

module.exports = router;
