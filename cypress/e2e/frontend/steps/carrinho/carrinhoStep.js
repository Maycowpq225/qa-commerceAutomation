const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { default: CarrinhoPA } = require("./CarrinhoPA");

const carrinhoPA = new CarrinhoPA()

Given('sigo para o Checkout', () => {
    carrinhoPA.irParaCheckout()
})