var peca1 = 0
var peca2 = 0
var opcao
var readlineSync = require('readline-sync')
var opcaoPeca


do{
    opcao = parseInt(readlineSync.question("Escolha uma opcao \n\n" +
                                    "0 - Encerrar o programa\n" +
                                    "1 - Acrescentar uma peca\n" +
                                    "2 - Listar total de pecas\n\n"))
    switch(opcao){
        case 0: 
            console.log("Voce escolheu encerrar o programa...\n\n")
            break
        case 1: 
            opcaoPeca = parseInt(readlineSync.question("Qual peca deseja acrescentar? 1 ou 2 \n"))
            if(opcaoPeca == 1){
                peca1 = peca1 + 1
                break;
            }else if(opcaoPeca == 2){ 
                opcao2++
                break;
            }else{
                console.log("opcao invalida\n")
                break;
            }
        case 2:
            console.log("Total de pecas do tipo1: " + peca1 + "\n")
            console.log("total de pecas do tipo 2: " + peca2 + "\n")
            break;
        default:
            console.log("opcao invalida. Escolha entre 0 e 2.\n")
        } 
}while(opcao != 0)
