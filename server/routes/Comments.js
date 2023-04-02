const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddlewares");
const { getPostComment, postNewComment } = require("../controllers/Comments");

// get post's comment
router.get("/:id", getPostComment);

// post comment
router.post("/postcomment/:id", validateToken, postNewComment);

module.exports = router;
