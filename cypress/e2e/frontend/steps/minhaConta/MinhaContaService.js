import RestRequest from "../../../../support/RestRequests";

const userEndpoint = "http://localhost:3000/api/users"
const loginEndPoint = "http://localhost:3000/api/login"

class MinhaContaService extends RestRequest {

    criarUsuarioViaBackend() {
        cy.gerarNomeAleatorio().then(nome => {
            cy.gerarEmailAleatorio(nome).then(email => {
                cy.gerarSenhaAleatoria().then(senha => {
                    const body = {
                        'name': nome,
                        'email': email,
                        'password': senha,
                        'isAdmin': false
                    };
                    cy.wrap(body).as('credenciaisUsuario')
                    this.doPostRequestWithBody(body, userEndpoint);
                });
            });
        });
    }

    realizarLogin(email, senha) {
        const body = {
            'email': email,
            'password': senha,
        };
        return this.doPostRequestWithBody(body, loginEndPoint)
    }

}
export default MinhaContaService