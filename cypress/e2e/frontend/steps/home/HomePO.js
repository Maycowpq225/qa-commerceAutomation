class HomePO {
    elementos = {
        btnCarrinho: () => cy.contains('.nav-link', 'CARRINHO'),
        btnMinhaConta: () => cy.get('#account-link'),
        listBtnAdicionarAoCarrinho: () => cy.get('.btn.btn-primary.add-to-cart')
    }
}
export default HomePO