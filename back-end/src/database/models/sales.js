'use strict';

const Sales = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
      id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.NUMBER,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.NUMBER,
      sale_date: DataTypes.DATETIME,
      status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
  })
  return Sales;
}

module.exports = Sales
