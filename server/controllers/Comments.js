const { comments, users } = require("../models");

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

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const totalRows = comment.length;
  const totalPages = Math.ceil(totalRows / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};

  data.pagination = {
    page,
    limit,
    totalRows,
    totalPages,
  };

  data.data = comment.slice(startIndex, endIndex);
  res.paginatedResults = data;

  res.json(res.paginatedResults);
};
