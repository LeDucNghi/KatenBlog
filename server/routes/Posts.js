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
  uploadImage,
} = require("../controllers/Post");

// get all post
router.get("/getallpost", getAllPost);

// create a new post
router.post("/createpost", [validateToken, upload], createPost);

// upload image
// router.post("/upload", upload, uploadImage);

// get image
router.get("/:publicId", getDetailImage);

// get detail post
router.get("/:id", getDetailPost);

// posts comment
router.post("/:id", validateToken, postNewComment);

module.exports = router;
