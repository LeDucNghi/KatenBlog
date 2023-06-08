const { comments, users, likes } = require("../models");
const { handleSortList, handlePaginate } = require("../services/Post");

// UPLOAD NEW COMMENT
exports.postNewComment = async (req, res) => {
  const comment = req.body;

  comment.userId = req.user.id;
  comment.postId = req.params.id;

  await comments.create(comment);

  res.json(comment);
};

// GET POST'S COMMENT
exports.getPostComment = async (req, res) => {
  const id = req.params.id;

  const comment = await comments.findAll({
    where: { postId: id },
    include: [
      {
        model: users,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "username"],
        },
      },
      {
        model: likes,
      },
    ],
  });

  const sortedData = handleSortList(comment, "latest");

  const paginatedResults = handlePaginate(req, sortedData);

  res.status(200).send(paginatedResults);
};

// LIKE COMMENT
exports.handleLikeComment = async (req, res) => {
  const postId = req.params.postId;
  const userId = req.user.id;
  const commentId = req.params.commentId;

  const like = {};

  like.userId = userId;
  like.postId = postId;
  like.commentId = commentId;

  const isCommented = await comments.findOne({ where: { id: commentId } });

  const isLiked = await likes.findOne({
    where: { postId: postId, userId: userId, commentId: commentId },
  });

  if (!isCommented) {
    res.status(404).send({ message: "Not found your comment 🤔" });
  } else {
    if (isLiked) {
      likes.destroy({
        where: { postId: postId, userId: userId, commentId: commentId },
      });
      res
        .status(200)
        .send({ message: `You've just unliked comment ${commentId}` });
    } else {
      await likes.create(like);

      res
        .status(200)
        .send({ message: `You've just liked comment ${commentId}` });
    }
  }
};

// DELETE COMMENT
exports.handleDeleteComment = async (req, res) => {
  const commentId = req.params.commentId;

  await comments.destroy({ where: { id: commentId } });

  res
    .status(200)
    .send({ message: `Delete comment ${commentId} successful 🥳` });
};
