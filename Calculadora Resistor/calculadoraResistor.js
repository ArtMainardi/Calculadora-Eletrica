const faixa1 = document.querySelector("#cor1");
const faixa2 = document.querySelector("#cor2");
const faixa3 = document.querySelector("#cor3");
const faixa4 = document.querySelector("#cor4");
const faixa5 = document.querySelector("#cor5");

let result = "";

function calculadoraResistor(){
    const faixas = document.querySelector("#faixas");
    const seletor3 = document.querySelector("#seletor-cores-3");
    const resultText = document.querySelector("#result-text");

    faixas.addEventListener('change', () => {
        if(faixas.value == "5"){
            seletor3.style.display = 'flex';
        } else {
            seletor3.style.display = 'none';
        }
    });

    mudarCorSeletor(faixa1, 1);
    mudarCorSeletor(faixa2, 1);
    mudarCorSeletor(faixa3, 1);
    mudarCorSeletor(faixa4, 2);
    mudarCorSeletor(faixa5, 3);
}

mudarCorSeletor();
function calcularResultado(){
    faixa1.addEventListener('change', () => {
        result += faixa1.value;
        result += faixa2.value;
        result += faixa3.value;
        result = parseInt(result) * faixa4.value;
    });

    faixa2.addEventListener('change', () => {
        result += faixa1.value;
        result += faixa2.value;
        result += faixa3.value;
        result = parseInt(result) * faixa4.value;
    });

    faixa3.addEventListener('change', () => {
        result += faixa1.value;
        result += faixa2.value;
        result += faixa3.value;
        result = parseInt(result) * faixa4.value;
    });

    faixa4.addEventListener('change', () => {
        result += faixa1.value;
        result += faixa2.value;
        result += faixa3.value;
        result = parseInt(result) * faixa4.value;
    });

    console.log(result);
}