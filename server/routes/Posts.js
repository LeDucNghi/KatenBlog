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
const { recents, posts } = require("../models");

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
router.post("/recent/:postId", validateToken, async (req, res) => {
  const postId = Number(req.params.postId);
  const userId = req.user.id;

  const findRecentBlog = await recents.findOne({
    where: { userId: userId, postId: postId },
  });

  if (findRecentBlog) {
    await recents.update(
      { updatedAt: new Date() },
      { where: { postId: postId } }
    );
  } else {
    await recents.create({ postId, userId });
  }

  res
    .status(200)
    .send({ message: `You've just read blog ${req.params.postId}` });
});

// GET USER'S RECENT BLOG
router.get("/getrecentblog", validateToken, async (req, res) => {
  const userId = req.user.id;

  const data = await recents.findAll({
    where: { userId: userId },
    include: {
      model: posts,
    },
  });

  // sort by newest user's recent blog
  const sortedData = data.sort(
    (a, b) => Number(b.createdAt) - Number(a.createdAt)
  );

  res.status(200).send({ data: sortedData.slice(0, 4) });
});

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
