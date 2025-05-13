import MinhaContaPO from "./MinhaContaPO";

class MinhaContaPA extends MinhaContaPO {

    realizarLogin(email, senha) {
        this.elementos.fieldEmail().type(email)
        this.elementos.fieldSenha().type(senha)
        this.elementos.btnEntrar().click()
    }

    acessarAtualizarCadastro() {
        this.elementos.btnAtualizarCadastro().click()
    }
    
}
export default MinhaContaPA