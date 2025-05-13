const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { default: HomePA } = require("./HomePA");

const homePA = new HomePA()

Given('que estou na home do portal QACommerce', () => {
    cy.visit('http://localhost:3000')
})

Given('adiciono um produto ao carrinho', () => {
    homePA.adicionarProdutoCarrinho()
})

Given('vou para o carrinho', () => {
    homePA.acessarCarrinho()
})

Given('clico no botão Minha Conta', () => {
    homePA.acessarMinhaConta()
})