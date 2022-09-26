const md5 = require('md5');
const HandleError = require('./errorHandlers');

const encryptPassword = (password) => {
  const hash = md5(password);
  return hash;
};

const checkPassword = (password, passwordHash) => {
  const hash = md5(password);
  if (hash !== passwordHash) {
    throw new HandleError(401, 'Incorrect password');
  }
};

module.exports = {
  encryptPassword,
  checkPassword,
};