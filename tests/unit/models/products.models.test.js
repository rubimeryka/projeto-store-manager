const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const productsController = require('../../../src/controllers/products.controller');
const {
  /*
    [...]
  */
} = require('./mocks/products.controller.mock');
const { success, error } = require('../../../src/handlers/response');

describe('Teste de unidade do controller dos produtos', function () {
  it('Recuperando um produto pelo seu id', async function () {
    const res = {};
    const req = { params: { id: 42 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'getProductById')
      .resolves(success(responseNewProduct));

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseNewProduct);
  });
});