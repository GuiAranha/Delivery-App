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

const transform = (response) => {
  const { totalPrice, saleDate, status, products, seller } = response;
  const newProducts = products.map(
    ({ id, name, price, SalesProducts: { quantity } }) => ({
      id,
      name,
      price,
      quantity,
    }),
  );
  return { totalPrice, saleDate, status, products: newProducts, seller: seller.name };
};

const getSaleById = async (id) => {
  const response = await Sales.findByPk(id, {
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
  return transform(response);
};

const updateStatus = async (status, id) => {
  const response = await Sales.update({ status }, {
    where: { id },
  });
  return response;
};

module.exports = {
  createSale,
  createSalesProducts,
  getSaleById,
  updateStatus,
};
