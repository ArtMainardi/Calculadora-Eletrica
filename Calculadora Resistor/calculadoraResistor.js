function calculadoraResistor(){
    const faixas = document.querySelector("#faixas");
    const seletor5 = document.querySelector("#seletor-cores-5");
    const faixa1 = document.querySelector("#cor1");
    const faixa2 = document.querySelector("#cor2");
    const faixa3 = document.querySelector("#cor3");
    const faixa4 = document.querySelector("#cor4");
    const faixa5 = document.querySelector("#cor5");

    faixas.addEventListener('change', () => {
        if(faixas.value == "5"){
            seletor5.style.display = 'flex';
        } else {
            seletor5.style.display = 'none';
        }
    });
}