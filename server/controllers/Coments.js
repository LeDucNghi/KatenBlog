const { Comments } = require("../models");

// UPLOAD NEW COMMENT
exports.postNewComment = async (req, res) => {
  const comment = req.body;

  comment.UserId = req.user.id;
  comment.PostId = req.params.id;

  await Comments.create(comment);

  //   Comments table create a row :
  //   {
  //     content : comment.content;
  //     image : comment.image;
  //     UserId : req.user.id;
  //     PostId : req.params.id;
  //   }

  res.json(comment);
};

// GET POST'S COMMENT
exports.getPostComment = async (req, res) => {
  const id = req.params.id;

  // findByPk = find by primary key ( in the database - id is the primary key )
  const comment = await Comments.findAll({ where: { PostId: id } });

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  // calculating the starting and ending index
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};
  if (endIndex < comment.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = comment.slice(startIndex, endIndex);

  res.paginatedResults = results;

  res.json(res.paginatedResults);
};
