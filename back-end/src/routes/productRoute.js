const { Router } = require('express');

const productController = require('../controllers/productController');

const productRoute = Router();
const productsId = '/products/:id';

productRoute.get('/products', productController.getAllController);
productRoute.get(productsId, productController.getByIdController);
productRoute.delete(productsId, productController.deleteByIdController);
productRoute.post('/products', productController.createController);
productRoute.put(productsId, productController.updateController);

module.exports = { productRoute };
