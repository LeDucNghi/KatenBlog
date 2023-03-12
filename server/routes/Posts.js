const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { upload, uploadImage } = require("../services/Posts/imageUpload");
const {
  getAllPost,
  createPost,
  getDetailPost,
  postNewComment,
  updatePost,
} = require("../controllers/Post");

const { Likes, Posts } = require("../models");

// get all post
router.get("/getallpost", getAllPost);

// create a new post
router.post("/createpost", [validateToken, upload], createPost);

// upload image
// router.post("/upload", upload, uploadImage);

// get image
// router.get("/:publicId", getDetailImage);

// get detail post
router.get("/detail/:id", validateToken, getDetailPost);

// posts comment
router.post("/comment/:id", validateToken, postNewComment);

// update post
router.put("/:id", [validateToken, upload], updatePost);

// like post
router.post("/like/:id", validateToken, async (req, res) => {
  const PostId = req.params.id;

  const UserId = req.user.id;

  const findPostLiked = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });

  if (!findPostLiked) {
    await Likes.create({ UserId, PostId });

    res.json({ message: `Post ${PostId} is liked` });
  } else {
    await Likes.destroy({ where: { PostId: PostId, UserId: UserId } });

    res.json({ message: `Post ${PostId} is unliked` });
  }
});

module.exports = router;
