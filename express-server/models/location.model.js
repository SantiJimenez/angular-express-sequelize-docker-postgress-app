module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define(
    "Location",
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      area_m2: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    },
    // {
    //   classMethods: {
    //     associate: function (models) {
    //       Location.belongsTo(models.Location, {
    //         foreignKey: "parent_location",
    //         targetKey: "id",
    //         as: "parent",
    //       });
    //     },
    //   },
    // },
    {
      timestamps: true,
      updatedAt: "updated_at",
      createdAt: "created_at",
    }
  );

  // Location.associate = function (models) {
  //   category.belongsTo(models.Location, {
  //     foreignKey: "parent_location",
  //     targetKey: "id",
  //     as: "parent",
  //   });
  // };

  // Location.belongsTo(Location, {
  //   foreignKey: "parent_location",
  //   as: "Location",
  // });
  // Location.isHierarchy();

  return Location;
};
