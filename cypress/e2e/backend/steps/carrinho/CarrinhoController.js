const { default: RestRequests } = require("../../../../support/RestRequests");

const restRequests = new RestRequests();
const carrinhoEndPoint = 'http://localhost:3000/api/carrinho';

    function adicionarProdutoAoCarrinho() {
        restRequests.doPostRequestWithBody()
    }
