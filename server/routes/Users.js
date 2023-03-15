const express = require("express");
const router = express.Router();

const { signup, signin, getUserProfile } = require("../controllers/Users");
const { validateToken } = require("../middlewares/AuthMiddlewares");

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/profile", validateToken, getUserProfile);

module.exports = router;
