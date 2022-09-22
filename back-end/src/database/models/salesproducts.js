'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
      quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  })

  SalesProducts.associate = (model) => {
    model.Products.belongsToMany(model.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: {
        field: 'product_id',
        name: 'productId'
      }
    })
  }

  SalesProducts.associate = (model) => {
    model.Sales.belongsToMany(model.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: {
        field: 'sale_id',
        name: 'saleId'
      }
    })
  }
  return SalesProducts;
}

module.exports = SalesProducts
