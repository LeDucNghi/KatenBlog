module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define("likes");

  likes.associate = (models) => {
    likes.belongsTo(models.comments, {
      onDelete: "cascade",
    });
  };

  return likes;
};
