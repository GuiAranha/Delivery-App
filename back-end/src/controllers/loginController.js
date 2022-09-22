const { userLogin } = require('../services/loginService');

const loginController = async (req, res) => {
  const data = await userLogin(req.body);
  return res.status(200).json(data);
};

module.exports = { loginController };