const express = require("express");
const router = express.Router();

const {
  signup,
  signin,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/users");
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { users } = require("../models");

// SIGN UP
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GET USER PROFILE
router.get("/profile", validateToken, getUserProfile);

// UPDATE USER PROFILE
router.put("/profile/update/:userId", validateToken, updateUserProfile);

// router.get("/profile/comment/:userId", async (req, res) => {
//   const userId = req.params.userId;

//   const userProfile = await users.findByPk(userId, {
//     attributes: { exclude: ["password"] },
//   });

//   res.json({ userProfile });
// });

module.exports = router;
