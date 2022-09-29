const salesService = require('../services/salesService');

// const getAllController = async (_req, res) => {
//   const data = await salesService.getAll();
//   return res.status(200).json(data);
// };

// const getByIdController = async (req, res) => {
//   const data = await salesService.getbyId(req.params.id);
//   return res.status(200).json(data);
// };

// const deleteByIdController = async (req, res) => {
//   await salesService.deleteById(req.params.id);
//   return res.status(200).json().end();
// };

const createController = async (req, res) => {
  const data = await salesService.create(req.body);
  return res.status(201).json(data);
};

// const updateController = async (req, res) => {
//   const data = await salesService.update(req.params.id, req.body);
//   return res.status(200).json(data);
// };

module.exports = { 
  // getAllController, 
  // getByIdController, 
  // deleteByIdController, 
  createController, 
  // updateController,
 };