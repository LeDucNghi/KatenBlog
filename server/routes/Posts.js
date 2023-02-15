const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const postList = await Posts.findAll();

  res.json(postList);
});

router.post("/createpost", async (req, res) => {
  const post = req.body;
  console.log("🚀 ~ file: Posts.js:11 ~ router.post ~ post", post);

  await Posts.create(post);

  res.json(post);
});

module.exports = router;
