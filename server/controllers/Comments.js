const { comments, users } = require("../models");
const { handlePaginate } = require("../services/Posts/Pagination");

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
    include: {
      model: users,
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "username"],
      },
    },
  });

  const paginatedResults = handlePaginate(req, comment);

  res.json(paginatedResults);
};
