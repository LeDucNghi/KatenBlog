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
  likePost,
} = require("../controllers/Post");

// GET ALL POST
router.get("/getallpost", getAllPost);

// CREATE A NEW POST
router.post("/createpost", [validateToken, upload], createPost);

// GET DETAIL POST
router.get("/detail/:id", validateToken, getDetailPost);

// posts comment
router.post("/comment/:id", validateToken, postNewComment);

// update post
router.put("/:id", [validateToken, upload], updatePost);

// like post
router.post("/like/:id", validateToken, likePost);

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
