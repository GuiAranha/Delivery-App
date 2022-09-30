const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/sales', salesController.createSaleController);
salesRoute.post('/sales_products', salesController.createSalesProductsController);

module.exports = { salesRoute };
