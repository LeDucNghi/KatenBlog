module.exports = (sequalize, DataTypes) => {
  const recents = sequalize.define(
    "recents",
    {
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },

      createddAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },
    },
    {
      timestamps: false,
    }
  );

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
