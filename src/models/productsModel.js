const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection
    .execute('SELECT * FROM StoreManager.products');
  return products;
};

const getProductById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM StoreManager.products WHERE id = ?',
    [id]);
  return product;
};

const createProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return { id: insertId, name };
};

  const updateProduct = async (id, name) => {
    const [update] = await connection.execute(
      `UPDATE StoreManager.products
    SET name = '${name}'
    WHERE id = ${id};`,
    );
    return update;
  };

const deleteProduct = async (id) => {
 const excludeProduct = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ${id}`,
 );
  return excludeProduct;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};