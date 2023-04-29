const prodructsModel = require('../models/productsModel');

const validateId = async (req, res, next) => {
  const { id } = req.params;
  const product = await prodructsModel.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateId,
};