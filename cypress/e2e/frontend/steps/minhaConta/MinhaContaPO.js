class MinhaContaPO {
    elementos = {
        fieldEmail: () => cy.get('#email'),
        fieldSenha: () => cy.get('#password'),
        btnEntrar: () => cy.get('.btn.btn-primary'),
        btnAtualizarCadastro: () => cy.get('#update-account-button')
    }
}
export default MinhaContaPO