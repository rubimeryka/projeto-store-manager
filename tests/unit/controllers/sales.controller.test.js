const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');
const { createSaleBody,
  createSaleReturn } = require('../mocks/controller.mock');


describe('Testa Controller de vendas', function () {
  afterEach(() => sinon.restore());
  it('Recuperando uma venda pelo seu id', async function () {
    const res = {};
    const req = {
      body: createSaleBody,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'createSales')
      .resolves(createSaleReturn);

      const result = await salesController.createSales(req, res);

      expect(res.json).to.have.been.calledWith(createSaleReturn);
  });
});