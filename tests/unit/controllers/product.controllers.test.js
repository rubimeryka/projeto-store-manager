const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Testa Controller dos produtos', () => {
  afterEach(() => sinon.restore());
  describe('Success case', () => {
    it('Testa o retorno dos produtos', async () => {
      sinon.stub(productsService, 'getAll').resolves([allProductsResponse]);

      const req = {};

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);

    });

    it('Testa se a rota "products/:id" retorna um produto', async () => {
      sinon.stub(productsService, 'getProductById').resolves(productSearchNameResponse);

      const req = { params: { id: 42 } };

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);

    });

    it('Testa se a função retorna um erro caso o id não seja encontrado', async () => {
      sinon.stub(productsService, 'getProductById').resolves(null);

      const req = { params: { id: 42 } };

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductById(req, res);

      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });
});