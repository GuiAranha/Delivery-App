const express = require('express');
const cors = require('cors');
require('express-async-errors');
const { userRoute } = require('../routes/userRoute');
const { loginRoute } = require('../routes/loginRoute');
const errorMiddleware = require('../middlewares/errorMiddleware');
const productRoute = require('../routes/productRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(userRoute);
app.use(loginRoute);
app.use(productRoute);
app.use(errorMiddleware);

module.exports = app;
