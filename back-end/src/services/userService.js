const Joi = require('joi');
const { User } = require('../database/models');
const { encryptPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const HandleError = require('../helpers/errorHandlers');

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userCreate = async (user) => {
  const { error } = schema.validate(user);
  if (error) {
    throw new HandleError(404, 'Missing fields');
  }
  const hash = encryptPassword(user.password);
  await User.create({ ...user, password: hash, role: 'customer' });
  const data = createToken({ email: user.email, role: user.role });
  return data;
};

module.exports = { userCreate };
