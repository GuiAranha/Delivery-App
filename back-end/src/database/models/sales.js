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
  return Sales;
}

Sales.associate = (model) => {
  Sales.belongsTo(model.User, {
    foreignKey: 'userId', as: 'users'
  })

  Sales.belongsTo(model.User, {
    foreignKey: 'sellerId', as: 'seller'
  })

  // Sales.hasMany(model.SalesProducts, {
  //   foreignKey: 'saleId', as: 'salesProducts'
  // })
};

module.exports = Sales
