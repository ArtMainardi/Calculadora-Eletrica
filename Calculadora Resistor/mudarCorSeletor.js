function mudarCorSeletor(faixa, f, index){
    let outlinE = "3px solid ";
    let cor = "";
    let corPadrao = false;

    if(index == 1){
        if(faixa.value == ""){
            cor = "rgb(255, 197, 126)";
            corPadrao = true; //cor padrão
        } else if(faixa.value == "0"){
            cor = "rgb(0, 0, 0)"; //preto
        }else if(faixa.value == "1"){
            cor = "rgb(150, 75, 0)"; //marrom
        } else if(faixa.value == "2"){
            cor = "rgb(255, 0, 0)"; //vermelho
        } else if(faixa.value == "3"){
            cor = "rgb(255, 165, 0)"; //laranja
        } else if(faixa.value == "4"){
            cor = "rgb(255, 235, 90)"; //amarelo
        } else if(faixa.value == "5"){
            cor = "rgb(0, 255, 40)"; //verde
        } else if(faixa.value == "6"){
            cor = "rgb(65, 105, 225)"; //azul
        } else if(faixa.value == "7"){
            cor = "rgb(148, 0, 211)"; //violeta
        } else if(faixa.value == "8"){
            cor = "rgb(128, 128, 128)"; //cinza
        } else if(faixa.value == "9"){
            cor = "rgb(255, 255, 255)"; //branco
        }
    } else if(index == 2){
        if(faixa.value == ""){
            cor = "rgb(255, 197, 126)";
            corPadrao = true; //cor padrão
        } else if(faixa.value == 1){
            cor = "rgb(0, 0, 0)"; //preto
        } else if(faixa.value == 10){
            cor = "rgb(150, 75, 0)"; //marrom
        } else if(faixa.value == 100){
            cor = "rgb(255, 0, 0)"; //vermelho
        } else if(faixa.value == 1000){
            cor = "rgb(255, 165, 0)"; //laranja
        } else if(faixa.value == 10000){
            cor = "rgb(255, 235, 90)"; //amarelo
        } else if(faixa.value == 100000){
            cor = "rgb(0, 255, 40)"; //verde
        } else if(faixa.value == 1000000){
            cor = "rgb(65, 105, 225)"; //azul
        } else if(faixa.value == 10000000){
            cor = "rgb(148, 0, 211)"; //violeta
        } else if(faixa.value == 0.1){
            cor = "rgb(211, 175, 55)"; //dourado
        } else if(faixa.value == 0.01){
            cor = "rgb(192, 192, 192)"; //prateado
        }
    } else if(index == 3){
        if(faixa.value == ""){
            cor = "rgb(255, 197, 126)";
            corPadrao = true; //cor padrão
        } else if(faixa.value == "±1%"){
            cor = "rgb(150, 75, 0)"; //marrom
        } else if(faixa.value == "±2%"){
            cor = "rgb(255, 0, 0)"; //vermelho
        } else if(faixa.value == "±0,5%"){
            cor = "rgb(0, 255, 40)"; //verde
        } else if(faixa.value == "±0,25%"){
            cor = "rgb(65, 105, 225)"; //azul
        } else if(faixa.value == "±0,1%"){
            cor = "rgb(148, 0, 211)"; //violeta
        } else if(faixa.value == "±0,05%"){
            cor = "rgb(128, 128, 128)"; //cinza
        } else if(faixa.value == "±5%"){
            cor = "rgb(211, 175, 55)"; //dourado
        } else if(faixa.value == "±10%"){
            cor = "rgb(192, 192, 192)"; //prateado
        }
    }

    faixa.parentElement.style.outline = (outlinE + cor);
        if(!corPadrao){
            f.style.backgroundColor = cor;
        } else {
            f.style.backgroundColor = 'rgb(224, 224, 224)';
        }
}