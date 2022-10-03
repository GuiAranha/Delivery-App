const ordersService = require('../services/ordersService');

const getAllOrdersController = async (req, res) => {
  const { id, role } = req.body;
  const data = await ordersService.getAllOrders({ id, role });
  return res.status(200).json(data);
};

module.exports = {
  getAllOrdersController,
};