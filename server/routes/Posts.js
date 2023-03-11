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

const { Posts } = require("../models");

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
router.put("/:id", [validateToken, upload], updatePost);

module.exports = router;
