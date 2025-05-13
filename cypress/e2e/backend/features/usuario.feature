Feature: usuário

    Scenario: Criar novo usuário
        Given que gero dados randomicos para um novo usuário
        When executo a api de criação de usuário
        Then é apresentado a mensagem "Usuário criado com sucesso." no body
        And é retornado o status code 201

    Scenario: Tentar criar usuário com email já cadastrado anteriormente
        Given que gero dados randomicos para um novo usuário
        When executo a api de criação de usuário
        And executo a api de criação de usuario com os mesmo dados anteriores
        Then é apresentado a mensagem "Email já cadastrado." no body
        And é retornado o status code 400