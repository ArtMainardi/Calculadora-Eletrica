let finalIndex = 0;
let prefixoFinal;

function definirIndexFinal(){
    while(finalIndex == 0){
        switch(medidaFinal){
            case 1:
                finalIndex = 	0.000000000001;
                prefixoFinal = "p";
                break;
            case 2:
                finalIndex = 	0.000000001
                prefixoFinal = "n";
                break;
            case 3:
                finalIndex = 	0.000001;
                prefixoFinal = "µ";
                break;
            case 4:
                finalIndex = 	0.001;
                prefixoFinal = "m";
                break;
            case 5:
                finalIndex = 	1;
                prefixoFinal = "";
                break;
            case 6:
                finalIndex = 	1000;
                prefixoFinal = "k";
                break;
            case 7:
                finalIndex = 	1000000;
                prefixoFinal = "M";
                break;
            case 8:
                finalIndex = 	1000000000;
                prefixoFinal = "G";
                break;
            default:
                alert("Erro: opção digitada inválida!");
        }
    }
}