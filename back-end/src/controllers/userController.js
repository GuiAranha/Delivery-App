const userService = require('../services/userService');

const userCreateController = async (req, res) => {
  const data = await userService.userCreate(req.body);
  return res.status(201).json(data);
};

const userSearchController = async (req, res) => {
  const { role } = req.params;
  const data = await userService.userSearch(role);
  return res.status(200).json(data);
};

module.exports = { userCreateController, userSearchController };
