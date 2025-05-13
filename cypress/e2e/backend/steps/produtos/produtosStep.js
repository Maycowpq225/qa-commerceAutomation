const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ProdutosController } = require("./ProdutosController");

const produtosController = new ProdutosController();

Given ('que busco um produto na lista de produtos', () => {
    produtosController.buscarProdutoValido();
})