const errorMiddleware = (error, _req, res, _next) => {
  console.log(error);
  res.status(error.status || 500).json({ message: error.message });
};
module.exports = { errorMiddleware };
