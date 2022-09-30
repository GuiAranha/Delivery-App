'use strict';

const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
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

Products.associate = (model) => {
  Products.hasMany(model.SalesProducts, {
    foreignKey: "productId",
    as: "salesProducts",
  });
};

module.exports = Products
