const { default: RestRequests } = require("../../../../support/RestRequests");

const produtosEndPoint = 'http://localhost:3000/api/produtos';

class ProdutosController extends RestRequests {

    buscarProdutoValido() {
        this.doGetRequest(produtosEndPoint)
        cy.get('@response').then(resp => {
            console.log('AQUIIII' + JSON.stringify(resp.body.products[1]))
        })
    }
}
export default ProdutosController