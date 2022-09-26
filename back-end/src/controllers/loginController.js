const loginService = require('../services/loginService');

const userLoginController = async (req, res) => {
  try {
    const data = await loginService.userLogin(req.body);
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = { userLoginController };