let qtdFaixas, faixa1, faixa2;

function calculadoraResistor(){
    while(qtdFaixas != 4 || qtdFaixas != 5){
        qtdFaixas = parseInt(prompt(`Digite a quantidade de faixas (4 ou 5): `));

        if(qtdFaixas != 4 || qtdFaixas != 5){
            alert("ERRO: opção digitada inválida!");
        }
    }

    faixa1 = parseInt(prompt(`"Valor atual: ${valor + " " + unidadeMedida}
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
}