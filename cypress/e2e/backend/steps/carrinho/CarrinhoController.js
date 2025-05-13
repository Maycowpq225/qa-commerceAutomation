import RestRequest from "../../../../support/RestRequests";

const carrinhoEndPoint = Cypress.env('base_url') + '/carrinho';

class CarrinhoController extends RestRequest {
    adicionarProdutoAoCarrinho() {
        cy.get('@produtoEscolhido').then(produto => {
            const body = {
                productId: produto.id,
                quantity: 1
            }
            this.doPostRequestWithBody(body, carrinhoEndPoint)
        })
    }

}
export default CarrinhoController