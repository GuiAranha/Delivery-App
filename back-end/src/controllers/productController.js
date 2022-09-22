const productService = require('../services/productService');

const getAllController = async (_req, res) => {
  const data = await productService.getAll();
  return res.status(200).json(data);
}

const getByIdController = async (req, res) => {
  const data = await productService.getbyId(req.params.id);
  return res.status(200).json(data);
}

const deleteByIdController = async (req, res) => {
  const data = await productService.deleteById(req.params.id);
  return res.status(200).json().end();
}

module.exports = { getAllController, getByIdController, deleteByIdController }