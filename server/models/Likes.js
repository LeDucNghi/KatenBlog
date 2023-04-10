module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define("likes");

  likes.associate = (models) => {
    likes.belongsTo(models.posts, {
      onDelete: "cascade",
    });
  };

  return likes;
};
