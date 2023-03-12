module.exports = (sequalize, DataTypes) => {
  const Users = sequalize.define("Users", {
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

  Users.associate = (models) => {
    Users.hasMany(models.Posts, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Comments, {
      onDelete: "cascade",
    });

    Users.hasMany(models.Likes, {
      onDelete: "cascade",
    });
  };

  return Users;
};
