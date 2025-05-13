import HomePO from "./HomePO";

class HomePA extends HomePO {

    acessarCarrinho() {
        this.elementos.btnCarrinho().click()
    }

    acessarMinhaConta() {
        this.elementos.btnMinhaConta().click()
    }

    adicionarProdutoCarrinho() {
        this.elementos.listBtnAdicionarAoCarrinho().then(listaElementos => {
            const produtoAleatorio = Math.floor(Math.random() * listaElementos.length);
            this.elementos.listBtnAdicionarAoCarrinho().eq(produtoAleatorio).click({ force: true })
        })
    }
}
export default HomePA