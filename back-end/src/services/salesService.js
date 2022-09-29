const Joi = require('joi');

const { Sales } = require('../database/models');
const ErrorHandler = require('../helpers/errorHandler');

const schema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  status: Joi.string().required(),
});

async function create(sale) {
  const { error } = schema.validate(sale);
  if (error) {
    throw new ErrorHandler(404, error.message);
  }
  const data = await Sales.create({ ...sale });
  const {
    id, saleDate, userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
    status } = data;
  return {
    saleId: Number(id),
    saleDate,
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  };
}

module.exports = { create };
