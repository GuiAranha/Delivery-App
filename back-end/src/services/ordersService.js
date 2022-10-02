const { Sales } = require('../database/models');

async function getAllOrders({ id, role }) {
  if (role === 'customer') {
    const response = await Sales.findAll({ where: { userId: id } });
    return response;
  }

  if (role === 'seller') {
    const response = await Sales.findAll({ where: { sellerId: id } });
    return response;
  }
}

module.exports = { getAllOrders };