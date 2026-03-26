const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const f5 = document.querySelector("#f5");
    
function addListeners(){
    faixa1.addEventListener('change', () => {
        mudarCorSeletor(faixa1, f1, 1);
        atualizarResultado();
    });
    faixa2.addEventListener('change', () => {
        mudarCorSeletor(faixa2, f2, 1);
        atualizarResultado();
    });
    faixa3.addEventListener('change', () => {
        mudarCorSeletor(faixa3, f4, 1);
        atualizarResultado();
    });
    faixa4.addEventListener('change', () => {
        mudarCorSeletor(faixa4, f3, 2);
        atualizarResultado();
    });
    faixa5.addEventListener('change', () => {
        mudarCorSeletor(faixa5, f5, 3);
        atualizarResultado();
    });
}