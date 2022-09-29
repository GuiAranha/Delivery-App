const salesService = require('../services/salesService');

const createController = async (req, res) => {
  const data = await salesService.create(req.body);
  return res.status(201).json(data);
};

module.exports = {
  createController,
};
