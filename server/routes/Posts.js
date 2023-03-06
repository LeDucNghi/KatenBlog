const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { upload } = require("../services/Posts/imageUpload");
const {
  getAllPost,
  createPost,
  getDetailPost,
  postNewComment,
  getDetailImage,
} = require("../controllers/Post");

const { Posts } = require("../models")

// get all post
router.get("/getallpost", getAllPost);

// create a new post
router.post("/createpost", [validateToken, upload], createPost);

// upload image
// router.post("/upload", upload, uploadImage);

// get image
// router.get("/:publicId", getDetailImage);

// get detail post
router.get("/:id", validateToken, getDetailPost);

// posts comment
router.post("/:id", validateToken, postNewComment);

// update post
router.patch("/:id", validateToken, async (req, res) => {
  const id = req.params.id

  const contentChanged = req.body

  if(!contentChanged) {
    res.status(400).send({message : "Nothing changed"})
  }

  await Posts.update()
});

module.exports = router;
