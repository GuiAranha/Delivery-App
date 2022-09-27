const productService = require('../services/productService');

const getAllController = async (_req, res) => {
  const data = await productService.getAll();
  return res.status(200).json(data);
};

const getByIdController = async (req, res) => {
  const data = await productService.getbyId(req.params.id);
  return res.status(200).json(data);
};

const deleteByIdController = async (req, res) => {
  await productService.deleteById(req.params.id);
  return res.status(200).json().end();
};

const createController = async (req, res) => {
  const data = await productService.create(req.body);
  return res.status(200).json(data);
}

const updateController = async (req, res) => {
  const data = await productService.update(req.params.id, req.body);
  return res.status(200).json(data);
}

module.exports = { 
  getAllController, 
  getByIdController, 
  deleteByIdController, 
  createController, 
  updateController
 };