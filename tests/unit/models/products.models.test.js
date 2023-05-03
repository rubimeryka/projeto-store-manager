const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../src/models/productsModels');
const connection = require('../../../src/models/connection');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Products Model tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());
    it('GetAll with products', async () => {
      sinon.stub(connection, 'execute').resolves([allProductsResponse]);

      const result = await productsModels.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);
      expect(result[0]).to.contain.keys(['id', 'name']);
    });

    it('Get one product', async () => {
      sinon.stub(connection, 'execute').resolves([productSearchNameResponse]);

      const result = await productsModels.getProductById(1);

      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['id', 'name']);
    });
  });
});