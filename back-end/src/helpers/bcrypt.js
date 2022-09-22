const bcrypt = require('bcrypt');
const HandleError = require('./errorHandlers');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;
};

const checkPassword = (password, passwordHash) => {
  const isMatch = bcrypt.compareSync(password, passwordHash);
  if (!isMatch) {
    throw new HandleError(500, 'Incorrect email or password');
  }
};

module.exports = {
  encryptPassword,
  checkPassword,
};