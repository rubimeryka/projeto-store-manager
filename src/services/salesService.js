const salesModel = require('../models/salesModel');

const createSales = async (productsList) => {
  const saleId = await salesModel.createSales();

  const promises = productsList.map(({ productId, quantity }) => (
    salesModel.createSalesProduct({ saleId, productId, quantity })
  ));
  
  await Promise.all(promises);
  
  return {
    id: saleId,
    itemsSold: productsList,
  };
};

module.exports = {
  createSales,
};