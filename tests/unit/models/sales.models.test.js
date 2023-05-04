const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);
const { responseNewProduct, saleCreateResponse} = require('../../../__tests__/_dataMock');
const salesModel  = require('../../../src/models/salesModel');
const connection = require('../../../src/models/connection');

describe('Testa Model de vendas', function () {
  afterEach(() => sinon.restore());
  it('Recuperando uma venda pelo seu id', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await salesModel.createSalesProduct({saleId: 1, productId: 2, quantity: 3});
    expect(result).to.be.deep.equal(undefined);
  });
  it('Testa se é possível cadastrar nova venda', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await salesModel.createSales();
    expect(result).to.be.deep.equal(1)
  })
});