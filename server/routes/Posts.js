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
  findUserPost,
  getPostByCategories,
} = require("../controllers/Post");

// GET ALL POST
router.get("/getallpost", getAllPost);

// GET POST BY CATEGORY
router.get("/categories/:name", getPostByCategories);

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

// USER's POST
router.get("/userpostlist/:id", findUserPost);

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
