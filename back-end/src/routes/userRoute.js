const { Router } = require('express');

const { userCreateController } = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/register', userCreateController);

module.exports = { userRoute };
