class CheckoutPO {
    elementos = {
        fieldNome: () => cy.get('#first-name'),
        fieldSobrenome: () => cy.get('#last-name'),
        fieldEndereço: () => cy.get('#address'),
        fieldNumero: () => cy.get('#number'),
        fieldCEP: () => cy.get('#cep'),
        fieldTelefone: () => cy.get('#phone'),
        fieldEmail: () => cy.get('#email'),
        listRadiosformPagamento: () => cy.get('.form-check-label'),
        checkBoxAceiteTermos: () => cy.get('#terms'),
        btnFinalizarPedido: () => cy.get('.btn.btn-primary').contains('Finalizar Pedido'),
        lblStatusDoPedido: () => cy.get('h1').contains('STATUS DO PEDIDO'),
        lblPagamentoAprovado: () => cy.get('strong').contains('Pagamento aprovado'),
        navbar: () => cy.get('.navbar-brand')
    }
}
export default CheckoutPO