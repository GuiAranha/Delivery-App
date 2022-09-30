'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sales_products", {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: "sale_id",
        references: {
          model: "sales",
          key: "productId",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: "product_id",
        references: {
          model: "products",
          key: "saleId",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("sales_products");
  }
};