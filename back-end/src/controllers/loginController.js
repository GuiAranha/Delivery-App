const loginService = require('../services/loginService');

const userLoginController = async (req, res) => {
  const data = await loginService.userLogin(req.body);
  console.log(data);
  return res.status(200).json(data);
};

module.exports = { userLoginController };