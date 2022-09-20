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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'user_id',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'saller_id',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.NUMBER,
        allowNull: false,
        field: 'total_price'

      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: Sequelize.NUMBER,
        allowNull: false,
        field: 'delivery_number'
      },
      saleDate: {
        type: Sequelize.DATETIME,
        allowNull: false,
        field: 'sale_date'
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};