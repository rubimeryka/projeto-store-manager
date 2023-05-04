const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');
const salesService = require('../../../src/services/salesService');
const { allProductsResponse, productSearchNameResponse } = require('../../../__tests__/_dataMock');

describe('Testa Service dos produtos', () => {
  afterEach(() => sinon.restore());
  describe('Success case', () => {
    it('Testa o retorno dos produtos', async () => {
      sinon.stub(productsModel, 'getAll').resolves([allProductsResponse]);

      const result = await productsService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(1);
    });

    it('Testa se a rota "products/:id" retorna um produto', async () => {
      sinon.stub(productsModel, 'getProductById').resolves(allProductsResponse[0]);

      const result = await productsService.getProductById(1);

      expect(result).to.be.an('array');
      expect(result).to.be.deep.equal(allProductsResponse[0]);
    });

    it('Testa se a função retorna um erro caso o id não seja encontrado', async () => {
      sinon.stub(productsModel, 'getAll').resolves(allProductsResponse);

      const response = await productsService.getProductById(9);

      expect(response).to.be.an('array');
      expect(response.message).to.be.equal('Product not found');
    });
    
    it('Testa se é possivel atualizar um produto', async function () {
      sinon.stub(productsModel, 'getAll').resolves(allProductsResponse)
      const response = await productsService.updateProduct(productSearchNameResponse[0].id, productSearchNameResponse[0].name)

      expect(response).to.be.deep.equal(productSearchNameResponse[0]);
    })
    
  });
});