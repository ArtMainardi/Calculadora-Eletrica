function onOff5selectors(option){
    const mainContainer = document.querySelector(".main-container");
    const colorBandsContainer = document.querySelector(".color-bands-selectors");
    const resistor = document.querySelector(".resistor");
    const pino = document.querySelector(".pino");
    const retangulo = document.querySelector(".retangulo");
    const seletor3 = document.querySelector("#seletor-cores-3");
    
    if(option == 1){
        seletor3.style.display = 'flex';
        f3.style.display = 'flex';
        f3.classList.add("f3-extended");
        f4.classList.add("f4-extended");
        seletor3.classList.add("seletor-animation");
        mainContainer.classList.add("main-container-extendido");
        colorBandsContainer.classList.add("color-bands-selectors-extended");
        pino.classList.add("pino-extended");
        retangulo.classList.add("retangulo-extended");
        resistor.classList.add("resistor-extended");
    } else{
        seletor3.style.display = 'none';
        f3.style.display = 'none';
        f3.classList.remove("f3-extended");
        f4.classList.remove("f4-extended");
        seletor3.classList.remove("seletor-animation");
        mainContainer.classList.remove("main-container-extendido");
        colorBandsContainer.classList.remove("color-bands-selectors-extended");
        pino.classList.remove("pino-extended");
        retangulo.classList.remove("retangulo-extended");
        resistor.classList.remove("resistor-extended");
    }
}