const { Router } = require('express');

const userController = require('../controllers/userController');

const userRoute = Router();

userRoute.post('/register', userController.userCreateController);
userRoute.post('/user', userController.userGetIdByEmail);
userRoute.get('/users/:role', userController.userSearchController);

module.exports = { userRoute };
