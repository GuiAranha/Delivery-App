const { Router } = require('express');

const ordersController = require('../controllers/ordersController');

const ordersRoute = Router();

ordersRoute.post('/orders', ordersController.getAllOrdersController);

module.exports = { ordersRoute };
