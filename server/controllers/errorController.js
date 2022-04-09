module.exports = (err, req, res, next) => {
  res.status(404).json({
    status: err.status,
    message: `${err.message}:  from Express Error handler`,
    isOperational: err.isOperational,
  });
  next();
};
