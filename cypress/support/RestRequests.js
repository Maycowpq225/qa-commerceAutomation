class RestRequests {

    doPostRequestWithBody(bodyRequest, resource) {
        cy.request({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: bodyRequest,
            url: resource,
            failOnStatusCode: false
        }).as('response')
    }

    doGetRequestWithBody(bodyRequest, resource) {
        cy.request({
            method: 'GET',
            body: bodyRequest,
            url: resource,
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        }).as('response');
    }

    doGetRequest(resource) {
        cy.request({
            method: 'GET',
            url: resource,
            failOnStatusCode: false
        }).as('response')
    }

    // metodo incompleto
    requisicaoGetComParametros() {
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        }).as('response');
    }

    requisicaoGetComHeader(keyHeader, valueHeader) {
        return cy.request({
            method: 'GET',  // tipo de metodo a ser utilizado na requisão, pode ser do tipo "POST", "GET", "PUT", "DELETE"
            headers: { //headers passados para a api
                keyHeader: valueHeader
            },
            url: url, //url da api a ser feito o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        }).as('response');
    }
}
export default RestRequests