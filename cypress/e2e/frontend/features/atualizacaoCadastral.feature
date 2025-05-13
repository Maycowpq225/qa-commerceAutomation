Feature: Atualização cadastral

    Background: Caminho a Atualização cadastral
        Given que estou na home do portal QACommerce
        And clico no botão Minha Conta
        And realizo login com credenciais criadas via backend
        And acesso a opcao Atualizar Cadastro

    Scenario: Atualização cadastral
        When preencho todos os campos com novos dados
        And clico na opção Atualizar
        Then é exibido a mensagem de sucesso "Usuário atualizado com sucesso!" em atualização cadastral
        And valido via api de login o acesso com novos dados

    Scenario: Atualização cadastral com 'Email' fora dos requisitos
        When preencho todos os campos com novos dados
        And altero o campo "Email" com um valor fora dos requisitos
        And clico na opção Atualizar
        Then é exibido uma mensagem de aviso acima do campo "Email" com o requisito em falta