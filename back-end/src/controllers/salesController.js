const salesService = require('../services/salesService');

const createSaleController = async (req, res) => {
  const data = await salesService.createSale(req.body);
  return res.status(201).json(data);
};

const createSalesProductsController = async (req, res) => {
  const data = await salesService.createSalesProducts(req.body);
  return res.status(201).json(data);
};

const getSaleByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await salesService.getSaleById(id);
  return res.status(200).json(data);
};

const updateStatusController = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = await salesService.updateStatus(status, id);
  return res.status(200).json(data);
};

module.exports = {
  createSaleController,
  createSalesProductsController,
  getSaleByIdController,
  updateStatusController,
};
