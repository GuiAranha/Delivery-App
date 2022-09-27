const Joi = require('joi');
const { Products } = require('../database/models');
const ErrorHandler = require('../helpers/errorHandler');

const schema = Joi.object({
  name: Joi.string.required(),
  price: Joi.number().required(),
  urlImage: Joi.string().required(),
});

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

const create = async (value) => {
  const { error } = schema.validate(value);
  if (error) {
    throw new ErrorHandler(404, 'Invalid fields!');
  }
  const data = await Products.create(value);
  return data;
};

const update = async (id, value) => {
  const { error } = schema.validate(value);
  if (error) {
    throw new ErrorHandler(404, 'Invalid fields!');
  }
  const data = await Products.update(value, { where: { id } });
  return data;
};

module.exports = { getAll, getbyId, deleteById, create, update };