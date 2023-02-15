module.exports = (sequalize, DataTypes) => {
  const Posts = sequalize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    categories: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Posts;
};
