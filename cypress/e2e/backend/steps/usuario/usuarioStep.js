const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
const { default: UsuarioController } = require("./UsuarioController");

const usuarioController = new UsuarioController()

Given('que gero dados randomicos para um novo usuário', () => {
    usuarioController.gerarDadosRandomicosUsuario();
})

When('executo a api de criação de usuário', () => {
    usuarioController.criarUsuario()
})

When('executo a api de criação de usuario 2 vezes com os mesmo dados', () => {
    usuarioController.criarUsuario()
    usuarioController.criarUsuario()
})