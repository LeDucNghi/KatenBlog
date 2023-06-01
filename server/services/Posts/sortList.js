const handleSortList = (list, type) => {
  var newList = null;

  // oldest - latest
  if (type === "latest") {
    newList = list.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  } else {
    newList = list.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
  }

  return newList;
};

module.exports = {
  handleSortList,
};
