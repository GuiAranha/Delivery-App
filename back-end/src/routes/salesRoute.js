const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/sales', salesController.createSaleController);
salesRoute.get('/sales/:id', salesController.getSaleByIdController);
salesRoute.post('/sales_products', salesController.createSalesProductsController);
salesRoute.put('/sales/:id', salesController.updateStatusController);

module.exports = { salesRoute };
