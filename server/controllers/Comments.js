const { Comments } = require("../models");

// UPLOAD NEW COMMENT
exports.postNewComment = async (req, res) => {
  const comment = req.body;

  comment.UserId = req.user.id;
  comment.PostId = req.params.id;

  await Comments.create(comment);

  res.json(comment);
};

// GET POST'S COMMENT
exports.getPostComment = async (req, res) => {
  const id = req.params.id;

  const comment = await Comments.findAll({ where: { PostId: id } });

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  // calculating the starting and ending index
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};

  data.pagination = {
    page,
    limit,
    totalRows: comment.length,
  };

  data.data = comment.slice(startIndex, endIndex);

  res.paginatedResults = data;

  res.json(res.paginatedResults);
};
