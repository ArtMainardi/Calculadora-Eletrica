let inicialIndex = 0;
let prefixoInicial;

function definirIndexInicial(){
    while(inicialIndex == 0){
        switch(medidaInicial){
            case 1:
                inicialIndex = 	0.000000000001;
                prefixoInicial = "p";
                break;
            case 2:
                inicialIndex = 	0.000000001
                prefixoInicial = "n";
                break;
            case 3:
                inicialIndex = 	0.000001;
                prefixoInicial = "µ";
                break;
            case 4:
                inicialIndex = 	0.001;
                prefixoInicial = "m";
                break;
            case 5:
                inicialIndex = 	1;
                prefixoInicial = "";
                break;
            case 6:
                inicialIndex = 	1000;
                prefixoInicial = "k";
                break;
            case 7:
                inicialIndex = 	1000000;
                prefixoInicial = "M";
                break;
            case 8:
                inicialIndex = 	1000000000;
                prefixoInicial = "G";
                break;
            default:
                alert("Erro: opção digitada inválida!");
        }
    }
}