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

const createProduct = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  return { id: insertId, name };
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};