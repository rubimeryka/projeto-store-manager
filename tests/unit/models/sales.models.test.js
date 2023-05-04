const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
const { responseNewProduct, saleCreateResponse} = require('../../../__tests__/_dataMock');
const salesModel  = require('../../../src/models/salesModel');


describe('Testa Model de vendas', function () {
  it('Recuperando uma venda pelo seu id', async function () {
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
  it('Testa se é possível cadastrar nova venda', async function () {
    sinon.stub(salesModel, 'createSalesProduct').resolves(saleCreateResponse.id);
    sinon.stub(connection, 'execute').resolves()
    sinon.stub(connection, 'execute').resolves([{ insertId: saleCreateResponse.id }])

    const response = await salesModel.createSales()

    expect(response).to.be.equal(saleCreateResponse.id);

  })
});