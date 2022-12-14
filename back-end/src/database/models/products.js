'use strict';

const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING(200),
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  })
  
  return Products;
};

module.exports = Products
