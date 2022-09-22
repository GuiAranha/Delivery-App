const { Router } = require('express');

const { findUserController } = require('../controllers/UserController');

const userRoute = Router();

userRoute.post('/login', findUserController);

module.exports = { userRoute };
