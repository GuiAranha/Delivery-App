const userService = require('../services/userService');

const userCreateController = async (req, res) => {
  const data = await userService.userCreate(req.body);
  console.log(data);
  return res.status(201).json(data);
};

module.exports = { userCreateController };
