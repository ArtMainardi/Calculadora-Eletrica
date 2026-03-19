atualizarResultado();
function atualizarResultado(){
    const resultText = document.querySelector("#result-text");
    const resultText2 = document.querySelector("#result-text2");
    let result = "";
    let result2 = "";

    result += faixa1.value;
    result += faixa2.value;
    if(faixas.value == "5"){
        result += faixa3.value;
    }
    if(faixa4.value != ""){
        result = parseInt(result) * faixa4.value;
        if(parseInt(result) > 100){
            result2 = result;
            result = verificarMedida(parseInt(result));
        } else {
            result2 = "";
            resultText2.textContent = "";
        }
    }
    result += "Ω " + faixa5.value;
    resultText.textContent = result;

    if(result2 != ""){
        result2 += "Ω " + faixa5.value;
        resultText2.textContent = result2;
    }
}

function verificarMedida(medida){
    let index = "";
    if(medida >= 1000 && medida < 1000000){
        medida /= 1000;
        index = "k";
    } else if(medida >= 1000000 && medida < 1000000000){
        medida /= 1000000;
        index = "M";
    } else if(medida >= 1000000000){
        medida /= 1000000000;
        index = "G";
    }

    return (medida + index);
}