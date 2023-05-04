const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
const { responseNewProduct, saleCreateResponse} = require('../../../__tests__/_dataMock');
const salesModel  = require('../../../src/models/salesModel');


describe('Testa Model de vendas', function () {
  afterEach(() => sinon.restore());
  it('Recuperando uma venda pelo seu id', async function () {
    const res = {};
    const req = { params: { id: 42 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesModel, 'createSalesProduct')
      .resolves(responseNewProduct);

    await salesModel.createSalesProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseNewProduct);
  });
  it('Testa se é possível cadastrar nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await salesModel.createSales({ name: 'teste' });
    expect(result).to.be.deep.equal(1)
  })
});