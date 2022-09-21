require('dotenv').config();

const jwt = require('jsonwebtoken');
const HandleError = require('./errorHandlers');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};
const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (_err) {
    throw new HandleError(401, 'Expired or Invalid Token!');
  }
};

module.exports = {
  createToken,
  validateToken,
};