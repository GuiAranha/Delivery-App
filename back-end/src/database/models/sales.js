'use strict';

const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: DataTypes.STRING(50),
    },
    {
      tableName: "sales",
      timestamps: false,
      underscored: true,
    }
  );

  Sales.associate = (model) => {
    Sales.belongsTo(model.User, {
      foreignKey: "userId",
      as: "users",
    });

    Sales.belongsTo(model.User, {
      foreignKey: "sellerId",
      as: "seller",
    });
  };

  return Sales;
}

module.exports = Sales
