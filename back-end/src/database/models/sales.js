'use strict';

const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING(50),
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  })
  return Sales;
}

Sales.associate = (model) => {
  Sales.belongsTo(model.User, {
    foreignKey: 'userId', as: 'users'
  })

   Sales.belongsTo(model.User, {
    foreignKey: 'sellerId', as: 'seller'
  })
};

module.exports = Sales
