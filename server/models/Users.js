module.exports = (sequalize, DataTypes) => {
  const Users = sequalize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
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
  };

  return Users;
};
