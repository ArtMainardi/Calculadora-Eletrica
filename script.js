console.log("========================================");
console.log("--------- Calculadora Elétrica ---------");
console.log("========================================");

let type = parseInt(prompt(`Digite uma opção: 
1- Calcular consumo de eletrodomésticos (kWh) 
2- Conversor de medidas
`));
let n1;
let n2;


switch(type){
    case 1:
        calculoConsumo();
        break;
    case 2:
        conversorMedidas();
        break;
    default:
        alert("ERRO: opção digitada inválida!");
}