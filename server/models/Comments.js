module.exports = (sequalize, DataTypes) => {
  const comments = sequalize.define("comments", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  comments.associate = (models) => {
    comments.belongsTo(models.users, {
      onDelete: "cascade",
    });

    comments.hasMany(models.likes, {
      onDelete: "cascade",
    });
  };

  return comments;
};
