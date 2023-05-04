const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getProductById(id);
  
  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
 
  if (!name) return res.status(400).json({ message: '"name" is required' });
  
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  
  const result = await productsService.createProduct(name);
  
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  const { id } = req.params;
  const response = await productsService.updateProduct(id, name);
  
  if (response.type) return res.status(response.type).json({ message: response.message });
  return res.status(200).json(response);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const response = await productsService.deleteProduct(id);

  if (response.type) return res.status(response.type).json({ message: response.message });

  return res.status(204).send();
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};