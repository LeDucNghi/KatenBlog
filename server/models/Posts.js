module.exports = (sequalize, DataTypes) => {
  const Posts = sequalize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subTitle: {
      type: DataTypes.STRING,
      allowNull: true,
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
