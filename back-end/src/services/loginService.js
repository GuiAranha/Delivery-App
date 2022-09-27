const Joi = require('joi');
const { User } = require('../database/models');
const { checkPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const HandleError = require('../helpers/errorHandlers');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}); 

const userLogin = async ({ email, password }) => {
  const { error } = schema.validate({ email, password });
  if (error) {
    throw new HandleError(404, 'Invalid fields!');
  }
  const user = await User.findOne({ where: { email } });
  if (user === null) {
    throw new HandleError(404, 'Invalid email');
  }
  checkPassword(password, user.password);
  const data = { name: user.name, email: user.email, role: user.role };
  const token = createToken(data);
  return { token, ...data };
};

module.exports = { userLogin };
