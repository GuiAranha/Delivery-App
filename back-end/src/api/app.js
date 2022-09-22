const express = require('express');
const cors = require('cors');
// const { userRoute } = require('../routes/UserRoute');
const { loginRoute } = require('../routes/loginRoute');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
// app.use(userRoute);
app.use(loginRoute);
app.use(errorMiddleware);

module.exports = app;
