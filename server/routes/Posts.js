const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");

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
  updateUserRecentBlog,
  getUserRecentBlog,
  getLatestBlogList,
} = require("../controllers/Post");
const { upload } = require("../services/Post");

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

// UPDATE USER'S s BLOG
router.post("/recent/:postId", validateToken, updateUserRecentBlog);

// GET USER'S RECENT BLOG
router.get("/getrecentblog", validateToken, getUserRecentBlog);

// GET LATEST BLOG LIST
router.get("/latest", getLatestBlogList);

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
