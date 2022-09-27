const jwt = require('../helpers/jwt');
const HandleError = require('../helpers/errorHandler');

const tokenMiddleware = (req, _res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      throw new HandleError(401, 'Token not found!');
    }

    const user = jwt.validateToken(authorization);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenMiddleware;