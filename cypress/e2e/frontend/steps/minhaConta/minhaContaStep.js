const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import MinhaContaPA from "./MinhaContaPA";
import MinhaContaService from "./MinhaContaService";

const minhaContaService = new MinhaContaService();
const minhaContaPA = new MinhaContaPA();

Given('realizo login com credenciais criadas via backend', () => {
    minhaContaService.criarUsuarioViaBackend();
    cy.get('@credenciaisUsuario').then(credenciais => {
        minhaContaPA.realizarLogin(credenciais.email, credenciais.password)
    })
})

Given('acesso a opcao Atualizar Cadastro', () => {
    minhaContaPA.acessarAtualizarCadastro()
})