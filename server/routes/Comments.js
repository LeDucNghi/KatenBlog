const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const {
  getPostComment,
  postNewComment,
  handleLikeComment,
  handleDeleteComment,
} = require("../controllers/Comments");

// GET POST'S COMMENT
router.get("/:id", getPostComment);

// POST NEW COMMENT
router.post("/postcomment/:id", validateToken, postNewComment);

// LIKE COMMENT
router.post("/liked/:postId/:commentId", validateToken, handleLikeComment);

// DELETE COMMENT
router.delete("/:commentId", handleDeleteComment);

module.exports = router;
