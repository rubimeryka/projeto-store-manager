const express = require('express');
const productsController = require('./controllers/productsController');
const {
  validateId,
} = require('./middlewares/productsValidator');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.status(200).json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);

app.get('/products/:id', validateId, productsController.getProductById);

app.post('/products', productsController.createProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
