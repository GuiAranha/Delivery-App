const { userCreate } = require('../services/UserService');

const findUserController = async (req, res) => {
  const token = await userCreate(req.body);
  return res.status(201).json({ token });
};

module.exports = { findUserController };
