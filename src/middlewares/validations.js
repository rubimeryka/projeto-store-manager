const productValidation = (req, res, next) => {
  const isProductId = req.body.every((sale) => Object.keys(sale).includes('productId'));
    
  if (!isProductId) return res.status(400).json({ message: '"productId" is required' });
  
  const isValidId = req.body.every((sale) => sale.productId <= 50);
  
  if (!isValidId) return res.status(404).json({ message: 'Product not found' });
  
  return next();
};

const quantityValidation = (req, res, next) => {
  const isQuantity = req.body.every((sale) => Object.keys(sale).includes('quantity'));
  
  if (!isQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  
  const isValidQty = req.body.every((sale) => sale.quantity >= 1);
  
  if (!isValidQty) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  
  return next();  
}; 

module.exports = {
  productValidation,
  quantityValidation,
};