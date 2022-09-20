'use strict';

const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
      id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
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
