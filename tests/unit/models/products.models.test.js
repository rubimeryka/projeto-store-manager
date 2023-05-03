const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const connection = require('../../../src/models/connection');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Testa Model dos produtos', () => {
  
  describe('Success case', () => {
    afterEach(() => sinon.restore());
    
    it('Testa o retorno dos produtos', async () => {
      sinon.stub(connection, 'execute').resolves([allProductsResponse]);

      const result = await productsModel.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(3);
      expect(result[0]).to.contain.keys(['id', 'name']);
    });

    it('Testa se a rota "products/:id" retorna um produto', async () => {
      sinon.stub(connection, 'execute').resolves([allProductsResponse[1]]);

      const response = await productsModel.getProductById(2);

      expect(response).to.be.deep.equal(allProductsResponse[1]);
    });
  });
});