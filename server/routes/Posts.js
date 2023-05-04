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

// USER's POST
router.get("/userpostlist/:id", async (req, res) => {
  const userId = req.params.id;
  const postListType = req.query.type;

  const userPostList = await posts.findAll({
    where: { userId: userId },
  });

  // this has 2 types of post lists to response
  // 1st is all post : reponse all user's post list
  // 2nd is the popular post : response popular's post list

  if (!userPostList) {
    res.status(404).json({
      message: "Not found any blog or this user has not shared any blog yet🤔",
    });
  } else {
    if (postListType === "all") {
      res.status(200).json({ postList: userPostList });
    } else {
      const popularList = await userPostList.sort((a, b) => {
        return b.visit - a.visit;
      });

      res.status(200).json({ postList: popularList });
    }
  }
});

// test
router.get("/test/:id", async (req, res) => {
  const isLoggedIn = req.query.isLoggedIn;

  res.status(200).json({ message: isLoggedIn });
});

module.exports = router;
