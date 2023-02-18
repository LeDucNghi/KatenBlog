const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares");

// get detail post
// router.get("/:id", async (req, res) => {
//   const id = req.params.id;

//   // findByPk = find by primary key ( in the database - id is the primary key )
//   const post = await Posts.findByPk(id);

//   res.json(post);
// });

// posts comment
router.post("/postcomment/:id", validateToken, async (req, res) => {
  const comment = req.body;
  console.log("🚀 ~ file: Comments.js:19 ~ router.post ~ comment", comment);

  comment.UserId = req.user.id;
  comment.PostId = req.params.id;

  await Comments.create(comment);

  //   Comments table create a row :
  //   {
  //     content : comment.content;
  //     image : comment.image;
  //     UserId : req.user.id;
  //     PostId : req.params.id;
  //   }

  res.json(comment);
});

module.exports = router;
