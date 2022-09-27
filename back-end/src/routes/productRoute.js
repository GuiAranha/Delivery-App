const { Router } = require('express');

const productController = require('../controllers/productController');

const productRoute = Router();

productRoute.get('/products', productController.getAllController);
productRoute.get('/products/:id', productController.getByIdController);
productRoute.delete('/products/:id', productController.deleteByIdController);
productRoute.post('/products', productController.createController);
productRoute.put('/products/:id', productController.updateController);

module.exports = productRoute;
