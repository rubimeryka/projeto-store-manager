const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/salesController');
const { responseNewProduct } = require('../../../__tests__/_dataMock');


describe('Testa Controller de vendas', function () {
  it('Recuperando uma venda pelo seu id', async function () {
    const res = {};
    const req = { params: { id: 42 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesController, 'createSale')
      .resolves(success(responseNewProduct));

    await salesController.createSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseNewProduct);
  });
});