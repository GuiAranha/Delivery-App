const salesService = require('../services/salesService');

const createSaleController = async (req, res) => {
  const data = await salesService.createSale(req.body);
  return res.status(201).json(data);
};

const createSalesProductsController = async (req, res) => {
  const data = await salesService.createSalesProducts(req.body);
  return res.status(201).json(data);
};

module.exports = {
  createSaleController,
  createSalesProductsController,
};
