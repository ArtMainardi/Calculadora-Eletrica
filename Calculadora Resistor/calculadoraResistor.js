const faixa1 = document.querySelector("#cor1");
const faixa2 = document.querySelector("#cor2");
const faixa3 = document.querySelector("#cor3");
const faixa4 = document.querySelector("#cor4");
const faixa5 = document.querySelector("#cor5");
const faixas = document.querySelector("#faixas");

function calculadoraResistor(){
    faixas.addEventListener('change', () => {
        if(faixas.value == "5"){
            onOff5selectors(1);
            atualizarResultado();
        } else {
            onOff5selectors(0);
            atualizarResultado();
        }
    });

    addListeners();
}