'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'userId',
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'sellerId',
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        allowNull: false,
        field: 'totalPrice'

      },
      deliveryAddress: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'deliveryAddress'
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'deliveryNumber'
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'saleDate'
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};