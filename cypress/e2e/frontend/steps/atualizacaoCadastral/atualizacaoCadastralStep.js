const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: AtualizacaoCadastralPA } = require("./AtualizacaoCadastralPA");

const atualizacaoCadastralPA = new AtualizacaoCadastralPA()

When('preencho todos os campos com novos dados', () => {
    atualizacaoCadastralPA.preencherCampos()
})

When('clico na opção Atualizar', () => {
    atualizacaoCadastralPA.clicarAtualizar()
})

When('altero o campo {string} com um valor fora dos requisitos', (campo) => {
    atualizacaoCadastralPA.alterarCampoDadoInvalido(campo)
})

Then('é exibido a mensagem de sucesso {string} em atualização cadastral', (mensagem) => {
    atualizacaoCadastralPA.validarMensagemSucesso(mensagem)
})

Then('não é possivel a atualização do usuario', () => {
    atualizacaoCadastralPA.atualizacaoNaoSucessedida()
})