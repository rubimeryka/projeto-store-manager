const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const response = await salesService.createSales(req.body);

  res.status(201).json(response);
};

module.exports = {
  createSales,
};