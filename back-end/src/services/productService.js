const { Products } = require('../database/models');

const getAll = async () => {
  const data = await Products.findAll();
  return data;
};

const getbyId = async (id) => {
  const data = await Products.findByPk(id);
  return data;
};

const deleteById = async (id) => {
  const data = await Products.destroy({ where: { id } });
  return data;
};

module.exports = { getAll, getbyId, deleteById };