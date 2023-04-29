const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection
    .execute('SELECT * FROM StoreManager.products');
  return products;
};

const getProductById = async (id) => {
  const [[idProduct]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return idProduct;
};

module.exports = {
  getAll,
  getProductById,
};