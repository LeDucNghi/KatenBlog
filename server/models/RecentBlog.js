module.exports = (sequalize, DataTypes) => {
  const recents = sequalize.define("recents");

  recents.associate = (models) => {
    recents.belongsTo(models.users, {
      onDelete: "cascade",
    });

    recents.belongsTo(models.posts, {
      onDelete: "cascade",
    });
  };

  return recents;
};
