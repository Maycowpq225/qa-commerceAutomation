Feature: Carrinho

    @QA_Commerce @backend @test_001 @carrinho
    Scenario: Adicionar produto ao carrinho
        Given que busco um produto na lista de produtos
        When adiciono o produto encontrado ao carrinho
        Then é apresentado a mensagem "Produto adicionado ao carrinho com sucesso." no body
        And é retornado o status code 201