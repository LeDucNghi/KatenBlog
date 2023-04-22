const express = require("express");

const postRouter = require("./Comments");
const userRouter = require("./Users");
const commentRouter = require("./Comments");

const router = express.Router();

module.exports = router;
