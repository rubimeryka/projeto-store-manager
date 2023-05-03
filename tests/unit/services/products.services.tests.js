const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../src/models/productsModels');
const productsService = require('../../../src/services/productsServices');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Products Service tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());
    it('GetAll with products', async () => {
      sinon.stub(productsModels, 'getAll').resolves([allProductsResponse]);

      const result = await productsService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(1);
    });

    it('Get one product', async () => {
      sinon.stub(productsModels, 'getProductsById').resolves(productSearchNameResponse);

      const result = await productsService.getProductsById(1);

      expect(result).to.be.an('array');
    });

    it('Get wrong id', async () => {
      sinon.stub(productsModels, 'getProductsById').resolves(null);

      const service = await productsService.getProductsById(9);

      expect(service).to.be.null;
    });
  });
});