const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const productsService = require('../../../src/services/productsServices');
const productsController = require('../../../src/controllers/productsController');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Products Controller tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());
    it('GetAll with products', async () => {
      sinon.stub(productsService, 'getAll').resolves([allProductsResponse]);

      const req = {};

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getAll(req, res);

      expect(res.status).to.have.been.calledWith(200);

    });

    it('Get one product', async () => {
      sinon.stub(productsService, 'getProductById').resolves(productSearchNameResponse);

      const req = { params: 1 };

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);

    });

    it('Get wrong id', async () => {
      sinon.stub(productsService, 'getProductById').resolves(null);

      const req = { params: 9 };

      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await productsController.getProductById(req, res);

      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });
});