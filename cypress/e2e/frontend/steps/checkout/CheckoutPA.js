import CheckoutPO from "./CheckoutPO";

class CheckoutPA extends CheckoutPO {

    preencherCamposObrigatorios() {
        this.elementos.fieldNome().type('Teste', { force: true });
        this.elementos.fieldSobrenome().type('Santos', { force: true });
        this.elementos.fieldEndereço().type('Rua dos testes', { force: true });
        this.elementos.fieldNumero().type('20', { force: true });
        this.elementos.fieldCEP().type('08727000', { force: true });
        this.elementos.fieldTelefone().type('9978349864', { force: true });
        this.elementos.fieldEmail().type('Teste@teste.com', { force: true });

    }

    escolherPagamento(metodoPagamento) {
        this.elementos.listRadiosformPagamento().contains(metodoPagamento).siblings('input').click({ force: true })
    }

    aceitarTermosECondicoes() {
        this.elementos.checkBoxAceiteTermos().click({ force: true })
    }

    finalizarPedido() {
        this.elementos.btnFinalizarPedido().click({ force: true })
    }

    validarStatusDoPedido() {
        this.elementos.lblStatusDoPedido().should('be.visible');
        this.elementos.lblPagamentoAprovado().should('be.visible');
    }

    validarErroCheckboxTermos() {
        this.elementos.checkBoxAceiteTermos()
            .siblings('.invalid-feedback')
            .contains('Este campo é obrigatório.')
            .should('be.visible')
    }
}
export default CheckoutPA