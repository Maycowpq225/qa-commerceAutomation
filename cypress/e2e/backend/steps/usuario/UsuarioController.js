import RestRequest from "../../../../support/RestRequests";

const userEndpoint = "http://localhost:3000/api/users"

class UsuarioController extends RestRequest {

    gerarDadosRandomicosUsuario() {
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
                });
            });
        });
    }

    criarUsuario() {
        cy.get('@credenciaisUsuario').then(bodyCredenciais => {
            this.doPostRequestWithBody(bodyCredenciais, userEndpoint);
        })
    }

}
export default UsuarioController