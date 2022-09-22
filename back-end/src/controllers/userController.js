const { userCreate } = require('../services/userService');

const userCreateController = async (req, res) => {
  const token = await userCreate(req.body);
  return res.status(201).json({ token });
};

module.exports = { userCreateController };
