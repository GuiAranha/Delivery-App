const Joi = require('joi');
const { User } = require('../database/models/index');
const { encryptPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const HandleError = require('../helpers/errorHandlers');

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  // role: Joi.string().required(),
});

const userCreate = async (user) => {
  const { error } = schema.validate(user);
  if (error) {
    throw new HandleError(404, error.message);
  }
  const hash = encryptPassword(user.password);
  console.log({ ...user, password: hash });
  await User.create({ ...user, password: hash });
  const data = createToken({ email: user.email, role: user.role });
  return data;
};

module.exports = { userCreate };
