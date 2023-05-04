const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');
const { rightSaleBody } = require('../../../__tests__/_dataMock');
const { createSaleBody,
  createSaleReturn } = require('../mocks/controller.mock');

describe('Testa Service de vendas', function () {
  it('Recuperando uma venda pelo seu id', async function () {
    sinon.stub(salesModel, 'createSales').resolves(createSaleReturn.id);

    sinon.stub(salesModel, 'createSalesProduct').resolves();

    const response = await salesService.createSales(createSaleBody);

    expect(response).to.be.deep.equal(createSaleReturn);
  });
});