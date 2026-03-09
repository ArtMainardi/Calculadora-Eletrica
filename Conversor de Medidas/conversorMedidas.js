let unidadeMedida = "";
let valor = 0;
let medidaInicial = 0;
let medidaFinal = 0;
let resultado = 0;

function conversorMedidas(){
    console.log("-- Conversor de Medidas selecionado! --");

    unidadeMedida = prompt(`Digite a unidade de medida: `);
    valor = parseFloat(prompt(`Digite o valor: `));

    medidaInicial = parseInt(prompt(`"Valor atual: ${valor + " " + unidadeMedida}
    Escolha a medida inicial do valor:
    1- p
    2- n
    3- µ
    4- m
    5- (unidade principal)
    6- k
    7- M
    8- G
    `));

    definirIndexInicial();

    medidaFinal = parseInt(prompt(`"Valor inicial: ${valor + " " + prefixoInicial + unidadeMedida}
    Escolha a medida desejada para a conversão:
    1- p
    2- n
    3- µ
    4- m
    5- (unidade principal)
    6- k
    7- M
    8- G
    `));

    definirIndexFinal();

    resultado = (valor*inicialIndex) / finalIndex;

    alert("Resultado: " + resultado + " " + prefixoFinal + unidadeMedida)

    console.log(`Valor inicial: ${valor + " " + prefixoInicial + unidadeMedida}`)
    console.log(`Valor final: ${resultado + " " + prefixoFinal + unidadeMedida}`)
}