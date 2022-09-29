const { Sales } = require('../database/models');

const create = async (cart) => {
  const data = await Sales.create(cart);
  return data;
};

module.exports = { create };
