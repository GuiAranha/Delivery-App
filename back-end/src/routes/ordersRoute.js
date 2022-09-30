const { Router } = require('express');

const salesController = require('../controllers/salesController');

const ordersRoute = Router();

ordersRoute.get('/customer/orders', salesController.getAllSalesController);

module.exports = { ordersRoute };
