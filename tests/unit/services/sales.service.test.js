const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const salesModel = require('../../../src/models/salesModel');
const { saleRegistered, rightSaleBody } = require('../../../__tests__/_dataMock');

describe('Testa Service de vendas', function () {
  it('Recuperando uma venda pelo seu id', async function () {
    sinon.stub(salesModel, 'createSales').resolves(saleRegistered);

    const response = await salesService.createSales(rightSaleBody);

    expect(response).to.be.deep.equal(saleRegistered);
  });
});