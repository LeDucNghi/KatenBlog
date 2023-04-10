const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { upload } = require("../services/Posts/imageUpload");
const {
  getAllPost,
  createPost,
  getDetailPost,
  postNewComment,
  updatePost,
  likePost,
  increaseBlogView,
  findTrendingList,
} = require("../controllers/Post");
const { posts } = require("../models");

// GET ALL POST
router.get("/getallpost", getAllPost);

// CREATE A NEW POST
router.post("/createpost", [validateToken, upload], createPost);

// GET DETAIL POST
router.get("/detail/:id", validateToken, getDetailPost);

// POST'S COMMENT
router.post("/comment/:id", validateToken, postNewComment);

// UPDATE POST
router.put("/:id", [validateToken, upload], updatePost);

// LIKE POST
router.post("/like/:id", validateToken, likePost);

// INCREASE BLOG'S VIEW
router.put("/view/:id", increaseBlogView);

// TRENDING LIST
router.get("/trending", findTrendingList);

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
