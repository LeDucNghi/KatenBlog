const handlePaginate = (req, list) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const totalRows = list.length;
  const totalPages = Math.ceil(totalRows / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};
  var paginatedResults = null;

  data.pagination = {
    page,
    limit,
    totalRows,
    totalPages,
  };

  data.data = list.slice(startIndex, endIndex);

  paginatedResults = data;

  return paginatedResults;
};

module.exports = {
  handlePaginate,
};
