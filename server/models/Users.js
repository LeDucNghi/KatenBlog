module.exports = (sequalize, DataTypes) => {
  const users = sequalize.define("users", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  users.associate = (models) => {
    users.hasMany(models.posts, {
      onDelete: "cascade",
    });

    users.hasMany(models.comments, {
      onDelete: "cascade",
    });

    users.hasMany(models.likes, {
      onDelete: "cascade",
    });
  };

  return users;
};
