const Joi = require('joi');

const { Sales, User, SalesProducts, Products } = require('../database/models');
const ErrorHandler = require('../helpers/errorHandler');

const schemaSale = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  status: Joi.string().required(),
});

const schemaSalesProducts = Joi.array().items(
  Joi.object({
    productId: Joi.number().required(),
    saleId: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
);

async function createSale(sale) {
  const { error } = schemaSale.validate(sale);
  if (error) {
    throw new ErrorHandler(404, error.message);
  }
  const data = await Sales.create(sale);
  return data;
}

async function createSalesProducts(payload) {
  const { error } = schemaSalesProducts.validate(payload);
  if (error) {
    throw new ErrorHandler(404, error.message);
  }

  const data = await SalesProducts.bulkCreate(payload);
  return data;
}

async function getAllSales() {
  const response = await Sales.findAll();
  return response;
}

async function getSaleById(id) {
  const response = await Sales.findOne({
    where: { id },
    attributes: ['id', 'totalPrice', 'saleDate', 'status'],
    include: [
      {
        model: Products,
        as: 'products',
        attributes: ['id', 'name', 'price'],
        through: {
          attributes: ['quantity'],
        },
      },
      { model: User, as: 'seller', attributes: ['name'] },
    ],
  });
  return response;
}

module.exports = { createSale, createSalesProducts, getAllSales, getSaleById };
