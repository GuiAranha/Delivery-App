const errorMiddleware = (error, _req, res, _next) => {
  res.status(error.code).json({ message: error.message });
};
module.exports = errorMiddleware;
