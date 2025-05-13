const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
const { default: CarrinhoController } = require("./CarrinhoController");

const carrinhoController = new CarrinhoController()

When('adiciono o produto encontrado ao carrinho', () => {
    carrinhoController.adicionarProdutoAoCarrinho();
})