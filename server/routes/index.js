const express = require("express");

const postRouter = require("./Comments");
const userRouter = require("./Users");
const commentRouter = require("./Comments");

const router = express.Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comment", commentRouter);

module.exports = router;
