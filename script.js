let nome = prompt(`Digite o nome do eletrodoméstico: `);
let kwh = 0;

let option = parseInt(prompt(`Escolha uma opção para fazer o cálculo:
1- Usando WATTS
2- Uando kWh
`));

switch(option){
    case 1:
        let power = parseInt(prompt("Digite a potência do(a) " + nome + ": "));
        kwh = power / 1000;
        dailyConsumptiom();
        break;
    case 2:
        kwh = parseFloat(prompt("Digite o kWh do(a) " + nome + ": "));
        dailyConsumptiom();
        break;
    default:
        alert("Erro: opção digitada inválida!");
}