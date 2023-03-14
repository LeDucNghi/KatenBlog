// const { DataTypes } = require("sequelize")

module.exports = (sequalize, DataTypes) => {
  const Comments = sequalize.define("Comments", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Comments;
};
