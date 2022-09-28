require('dotenv').config();
const fs = require('fs');

const evaluationKey = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const jwt = require('jsonwebtoken');
const HandleError = require('./errorHandler');

const createToken = (user) => {
  const token = jwt.sign({ data: user }, evaluationKey, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};
const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, evaluationKey);
    return data;
  } catch (_err) {
    throw new HandleError(401, 'Expired or Invalid Token!');
  }
};

module.exports = {
  createToken,
  validateToken,
};