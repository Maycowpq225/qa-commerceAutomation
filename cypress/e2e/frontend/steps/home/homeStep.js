const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { default: HomePA } = require("./HomePA");

const homePA = new HomePA()
const site = Cypress.env('site');

Given('que estou na home do portal QACommerce', () => {
    cy.visit(site)
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