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

const updateProduct = async (id, name) => {
  const products = await productsModel.getAllProducts();
  const notAValidId = !products.some((product) => product.id === Number(id));
  if (notAValidId) return { type: 404, message: 'Product not found' };
  await productsModel.updateProduct(Number(id), name);

  return { id, name };
}; 

const deleteProduct = async (id) => {
  const productId = Number(id);

  const products = await productsModel.getAll();

  const isInvalidId = !products.some((product) => product.id === productId);
  
  if (isInvalidId) return { type: 404, message: 'Product not found' };

  await productsModel.deleteProduct(productId);

  return { message: 'Product not found' };
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};