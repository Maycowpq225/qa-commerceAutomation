Feature: Atualização cadastral

    Background: Caminho a Atualização cadastral
        Given que estou na home do portal QACommerce
        And clico no botão Minha Conta
        And realizo login com credenciais criadas via backend
        And acesso a opcao Atualizar Cadastro

    @QA_Commerce @frontend @test_004 @atualizacaoCadastral
    Scenario: Atualização cadastral
        When preencho todos os campos com novos dados
        And clico na opção Atualizar
        Then é exibido a mensagem de sucesso "Usuário atualizado com sucesso!" em atualização cadastral

    @QA_Commerce @frontend @test_005 @atualizacaoCadastral
    Scenario: Atualização cadastral com 'Email' fora dos requisitos
        When preencho todos os campos com novos dados
        And altero o campo "Email" com um valor fora dos requisitos
        And clico na opção Atualizar
        Then não é possivel a atualização do usuario