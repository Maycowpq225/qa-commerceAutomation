import AtualizacaoCadastralPO from "./AtualizacaoCadastralPO";

class AtualizacaoCadastralPA extends AtualizacaoCadastralPO {

    preencherCampos() {
        cy.get('@credenciaisUsuario').then(credenciais => {
            this.elementos.fieldNome().type(credenciais.name + "Novo")
            this.elementos.fieldEmail().type(credenciais.email + "Novo")
            this.elementos.fieldSenha().type(credenciais.password + "Novo")
        })
    }

    clicarAtualizar() {
        this.elementos.btnAtualizar().click();
    }

    alterarCampoDadoInvalido(campo) {
        switch (campo) {
            case "Nome":
                this.elementos.fieldNome().clear()
                this.elementos.fieldNome().type('3432432432')
                break
            case "Email":
                this.elementos.fieldEmail().clear()
                this.elementos.fieldEmail().type('semArrobaEPonto')
                break
            case "Senha":
                this.elementos.fieldSenha().clear()
                this.elementos.fieldSenha().type('semNumerosOuCaracterEspecial')
                break
        }
    }

    validarMensagemSucesso(mensagem) {
        this.elementos.lblUsuarioAtualizado().should('contain', mensagem)
    }

    atualizacaoNaoSucessedida() {
        this.elementos.lblUsuarioAtualizado().should('not.be.visible')
    }

}
export default AtualizacaoCadastralPA