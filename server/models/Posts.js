module.exports = (sequalize, DataTypes) => {
  const posts = sequalize.define(
    "posts",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
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
        type: DataTypes.TEXT,
        allowNull: false,
      },

      visit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      createddAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  posts.associate = (models) => {
    posts.hasMany(models.comments, {
      onDelete: "cascade",
    });

    posts.hasMany(models.likes, {
      onDelete: "cascade",
    });

    posts.belongsTo(models.users, {
      onDelete: "cascade",
    });
  };

  return posts;
};
