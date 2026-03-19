const faixa1 = document.querySelector("#cor1");
const faixa2 = document.querySelector("#cor2");
const faixa3 = document.querySelector("#cor3");
const faixa4 = document.querySelector("#cor4");
const faixa5 = document.querySelector("#cor5");

function calculadoraResistor(){
    const faixas = document.querySelector("#faixas");

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

atualizarResultado();
function atualizarResultado(){
    const resultText = document.querySelector("#result-text");
    let result = "";

    result += faixa1.value;
    result += faixa2.value;
    if(faixas.value == "5"){
        result += faixa3.value;
    }
    if(faixa4.value != ""){
        result = parseInt(result) * faixa4.value;
    }
    result += "Ω " + faixa5.value;
    resultText.textContent = result;
}