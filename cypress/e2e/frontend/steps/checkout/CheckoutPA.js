import CheckoutPO from "./CheckoutPO";

class CheckoutPA extends CheckoutPO{

    preencherCamposObrigatorios() {
        this.elementos.fieldNome().type('Teste');
        this.elementos.fieldSobrenome().type('Santos');
        this.elementos.fieldEndereço().type('Rua dos testes');
        this.elementos.fieldNumero().type('20');
        this.elementos.fieldCEP().type('08727000');
        this.elementos.fieldTelefone().type('9978349864');
        this.elementos.fieldEmail().type('Teste@teste.com');

    }

    escolherPagamento(metodoPagamento) {
        this.elementos.listRadiosformPagamento().contains(metodoPagamento).siblings('input').click()
    }
    
    aceitarTermosECondicoes() {
        this.elementos.checkBoxAceiteTermos().click()
    }

    finalizarPedido() {
        this.elementos.btnFinalizarPedido().click()
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