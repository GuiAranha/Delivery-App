const { Router } = require('express');

const salesController = require('../controllers/salesController');

const salesRoute = Router();

salesRoute.post('/sales', salesController.createController);

module.exports = { salesRoute };
