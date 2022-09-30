'use strict';

const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "SalesProducts",
    {
      productId: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
      },
      saleId: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      tableName: "sales_products",
      timestamps: false,
      underscored: false,
    }
  );

  SalesProducts.associate = (model) => {
    model.Products.belongsToMany(model.Sales, {
      as: "sales",
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: "sale_id",
    });

    model.Sales.belongsToMany(model.Products, {
      as: "products",
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: "product_id",
    });
  }
  return SalesProducts;
}

module.exports = SalesProducts
