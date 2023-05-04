const createSaleBody = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const createSaleReturn = {
  id: 42,
  itemsSold: createSaleBody,
};

module.exports = {
  createSaleBody,
  createSaleReturn,
};
