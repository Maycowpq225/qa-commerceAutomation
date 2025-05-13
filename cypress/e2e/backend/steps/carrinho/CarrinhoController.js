import RestRequest from "../../../../support/RestRequests";

const carrinhoEndPoint = 'http://localhost:3000/api/carrinho';

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