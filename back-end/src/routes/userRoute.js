const { Router } = require('express');

const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/register', userController.userCreateController);

module.exports = { userRoute };
