const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return null;
  return product;
};

const createProduct = async (name) => {
  const newProduct = await productsModel.createProduct(name);
  
  return newProduct;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};