Feature: Checkout

    Background: Caminho ao checkout
        Given que estou na home do portal QACommerce
        And adiciono um produto ao carrinho
        And vou para o carrinho
        And sigo para o Checkout

    @QA_Commerce @frontend @test_006 @checkout
    Scenario: Checkout Simples
        When preencho campos obrigatorios
        And escolho pagamento via "Boleto"
        And aceito os termos e condições do site
        And finalizo o pedido
        Then sou redirecionado para o status do pedido com pagamento aprovado

    @QA_Commerce @frontend @test_007 @checkout
    Scenario: Checkout Simples sem aceitar termos e condições do site
        When preencho campos obrigatorios
        And escolho pagamento via "Pix"
        And finalizo o pedido
        Then é exibido a mensagem de erro abaixo do checkbox de termos