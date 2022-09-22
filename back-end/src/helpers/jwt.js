require('dotenv').config();

const jwt = require('jsonwebtoken');
const HandleError = require('./errorHandlers');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, 'secret_key', {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};
const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, 'secret_key');
    return data;
  } catch (_err) {
    throw new HandleError(401, 'Expired or Invalid Token!');
  }
};

module.exports = {
  createToken,
  validateToken,
};