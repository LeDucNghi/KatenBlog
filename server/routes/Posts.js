const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

// get all post
router.get("/getallpost", async (req, res) => {
  const postList = await Posts.findAll();

  res.json(postList);
});

// create a new post
router.post("/createpost", async (req, res) => {
  const post = req.body;

  post.UserId = req.body.id;

  await Posts.create(post);

  res.json(post);
});

// get detail post
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const post = await Posts.findByPk(id);

  res.json(post);
});

module.exports = router;
