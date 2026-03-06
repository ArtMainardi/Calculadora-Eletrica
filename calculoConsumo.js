function dailyConsumptiom(){
    let hourConsumption = kwh * 0.9;
    let timeUse = parseInt(prompt("Digite o tempo (em horas) diário de uso desse eletrodoméstico: "));
    let dailyKwh = kwh * timeUse;
    let consumoDiario = dailyKwh * 0.9;
    let daysUse = parseInt(prompt("Digite quantos dias por mês de uso: "));
    let mounthConsumption = consumoDiario * daysUse;

    console.log("Eletrodoméstico: " + nome);
    console.log("Consumo kWh: " + kwh + " kWh");
    console.log("Valor total por hora: R$" + hourConsumption.toFixed(2));
    console.log("Consumo diário em kWh: " + dailyKwh.toFixed(3) + " kWh");
    console.log("Valor total diário: R$" + consumoDiario.toFixed(2));
    console.log("Valor total por mês: R$" + mounthConsumption.toFixed(2));

}