function mudarCorSeletor(faixa, index){
    if(index == 1){
        if(faixa.value == ""){
            faixa.parentElement.style.outline = '3px solid rgb(255, 197, 126)' //cor padrão
        } else if(faixa.value == "0"){
            faixa.parentElement.style.outline = '3px solid rgb(0, 0, 0)' //preto
        }else if(faixa.value == "1"){
            faixa.parentElement.style.outline = '3px solid rgb(150, 75, 0)' //marrom
        } else if(faixa.value == "2"){
            faixa.parentElement.style.outline = '3px solid rgb(255, 0, 0)' //vermelho
        } else if(faixa.value == "3"){
            faixa.parentElement.style.outline = '3px solid rgb(255, 165, 0)' //laranja
        } else if(faixa.value == "4"){
            faixa.parentElement.style.outline = '3px solid rgb(255, 235, 90)' //amarelo
        } else if(faixa.value == "5"){
            faixa.parentElement.style.outline = '3px solid rgb(0, 255, 40)' //verde
        } else if(faixa.value == "6"){
            faixa.parentElement.style.outline = '3px solid rgb(65, 105, 225)' //azul
        } else if(faixa.value == "7"){
            faixa.parentElement.style.outline = '3px solid rgb(148, 0, 211)' //violeta
        } else if(faixa.value == "8"){
            faixa.parentElement.style.outline = '3px solid rgb(128, 128, 128)' //cinza
        } else if(faixa.value == "9"){
            faixa.parentElement.style.outline = '3px solid rgb(255, 255, 255)' //branco
        }
    } else if(index == 2){
        if(faixa.value == ""){
            faixa.parentElement.style.outline = '3px solid rgb(255, 197, 126)' //cor padrão
        } else if(faixa.value == 1){
            faixa.parentElement.style.outline = '3px solid rgb(0, 0, 0)' //preto
        } else if(faixa.value == 10){
            faixa.parentElement.style.outline = '3px solid rgb(150, 75, 0)' //marrom
        } else if(faixa.value == 100){
            faixa.parentElement.style.outline = '3px solid rgb(255, 0, 0)' //vermelho
        } else if(faixa.value == 1000){
            faixa.parentElement.style.outline = '3px solid rgb(255, 165, 0)' //laranja
        } else if(faixa.value == 10000){
            faixa.parentElement.style.outline = '3px solid rgb(255, 235, 90)' //amarelo
        } else if(faixa.value == 100000){
            faixa.parentElement.style.outline = '3px solid rgb(0, 255, 40)' //verde
        } else if(faixa.value == 1000000){
            faixa.parentElement.style.outline = '3px solid rgb(65, 105, 225)' //azul
        } else if(faixa.value == 10000000){
            faixa.parentElement.style.outline = '3px solid rgb(148, 0, 211)' //violeta
        } else if(faixa.value == 0.1){
            faixa.parentElement.style.outline = '3px solid rgb(211, 175, 55)' //dourado
        } else if(faixa.value == 0.01){
            faixa.parentElement.style.outline = '3px solid rgb(192, 192, 192)' //prateado
        }
    } else if(index == 3){
        if(faixa.value == ""){
            faixa.parentElement.style.outline = '3px solid rgb(255, 197, 126)' //cor padrão
        } else if(faixa.value == "±1%"){
            faixa.parentElement.style.outline = '3px solid rgb(150, 75, 0)' //marrom
        } else if(faixa.value == "±2%"){
            faixa.parentElement.style.outline = '3px solid rgb(255, 0, 0)' //vermelho
        } else if(faixa.value == "±0,5%"){
            faixa.parentElement.style.outline = '3px solid rgb(0, 255, 40)' //verde
        } else if(faixa.value == "±0,25%"){
            faixa.parentElement.style.outline = '3px solid rgb(65, 105, 225)' //azul
        } else if(faixa.value == "±0,1%"){
            faixa.parentElement.style.outline = '3px solid rgb(148, 0, 211)' //violeta
        } else if(faixa.value == "±0,05%"){
            faixa.parentElement.style.outline = '3px solid rgb(128, 128, 128)' //cinza
        } else if(faixa.value == "±5%"){
            faixa.parentElement.style.outline = '3px solid rgb(211, 175, 55)' //dourado
        } else if(faixa.value == "±10%"){
            faixa.parentElement.style.outline = '3px solid rgb(192, 192, 192)' //prateado
        }
    }
}