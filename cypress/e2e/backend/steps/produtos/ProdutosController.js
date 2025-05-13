import RestRequest from "../../../../support/RestRequests";

const produtosEndPoint = 'http://localhost:3000/api/produtos';

class ProdutosController extends RestRequest {
    buscarProdutoValido() {
        this.doGetRequest(produtosEndPoint)
        cy.get('@response').then(resp => {
            const produtoEscolhido = Math.floor(Math.random() * resp.body.products.length)
            cy.wrap(resp.body.products[produtoEscolhido]).as('produtoEscolhido')
        })
    }
}
export default ProdutosController