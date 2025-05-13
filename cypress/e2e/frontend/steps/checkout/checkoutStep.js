const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: CheckoutPA } = require("./CheckoutPA");

const checkoutPA = new CheckoutPA();

When('preencho campos obrigatorios', () => {
    checkoutPA.preencherCamposObrigatorios()
})

When('escolho pagamento via {string}', (metodoPagamento) => {
    checkoutPA.escolherPagamento(metodoPagamento)
})

When('aceito os termos e condições do site', () => {
    checkoutPA.aceitarTermosECondicoes()
})

When('finalizo o pedido', () => {
    checkoutPA.finalizarPedido()
})

Then('sou redirecionado para o status do pedido com pagamento aprovado', () => {
    checkoutPA.validarStatusDoPedido();
})

Then('é exibido a mensagem de erro abaixo do checkbox de termos', () => {
    checkoutPA.validarErroCheckboxTermos();
})
