import CarrinhoPO from "./CarrinhoPO";

class CarrinhoPA extends CarrinhoPO {
    
    irParaCheckout() {
        this.elementos.btnIrParaOCheckout().click();
    }
}
export default CarrinhoPA