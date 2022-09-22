const loginService = require('../services/loginService');

const userLoginController = async (req, res) => {
  const data = await loginService.userLogin(req.body);
  return res.status(200).json(data);
};

module.exports = { userLoginController };