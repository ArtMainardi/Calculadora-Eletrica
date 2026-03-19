const faixa1 = document.querySelector("#cor1");
const faixa2 = document.querySelector("#cor2");
const faixa3 = document.querySelector("#cor3");
const faixa4 = document.querySelector("#cor4");
const faixa5 = document.querySelector("#cor5");
const resultText = document.querySelector("#result-text");

let result = "";

function calculadoraResistor(){
    const mainContainer = document.querySelector(".main-container");
    const colorBandsContainer = document.querySelector(".color-bands-selectors");
    const faixas = document.querySelector("#faixas");
    const seletor3 = document.querySelector("#seletor-cores-3");

    faixas.addEventListener('change', () => {
        if(faixas.value == "5"){
            seletor3.style.display = 'flex';
            seletor3.classList.add("seletor-animation");
            mainContainer.classList.add("main-container-extendido");
            colorBandsContainer.classList.add("color-bands-selectors-extended");
            atualizarResultado();
        } else {
            seletor3.style.display = 'none';
            seletor3.classList.remove("seletor-animation");
            mainContainer.classList.remove("main-container-extendido");
            colorBandsContainer.classList.remove("color-bands-selectors-extended");
            atualizarResultado();
        }
    });

    faixa1.addEventListener('change', () => {
        mudarCorSeletor(faixa1, 1);
        atualizarResultado();
    });
    faixa2.addEventListener('change', () => {
        mudarCorSeletor(faixa2, 1);
        atualizarResultado();
    });
    faixa3.addEventListener('change', () => {
        mudarCorSeletor(faixa3, 1);
        atualizarResultado();
    });
    faixa4.addEventListener('change', () => {
        mudarCorSeletor(faixa4, 2);
        atualizarResultado();
    });
    faixa5.addEventListener('change', () => {
        mudarCorSeletor(faixa5, 3);
        atualizarResultado();
    });
}

atualizarResultado();
function atualizarResultado(){
    result = "";
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