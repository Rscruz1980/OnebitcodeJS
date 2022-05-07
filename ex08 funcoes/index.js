let nomeNave = prompt("Digite o nome da sua nave : ")

let velocidade = 0

let opcaoescolhida 

function Menu() {
    let opcao
    while (opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4") {
        opcao = prompt(" Oque deseja Fazer ? \n" + 
                        "1- Acelerar a Nave em 5 Km\s\n" +
                        "2- desacelerar a Nave em 5 Km\s\n" +
                        "3- Imprimir dados de bordo\n" + 
                        "4- Sair do programa"
        )
    }
    return opcao
}

function Acelerar(velocidade){
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0){
        novaVelocidade = 0
    }
    return novaVelocidade
}

function imprimirDados(nomeNave, velocidade){
    alert("Espaçonave: " + nomeNave + "\nVelocidade: " + velocidade + "Km\s")
}



do {
    opcaoescolhida = Menu()
    switch(opcaoescolhida) {
        case "1":
            velocidade = Acelerar(velocidade)
            break
        case "2":
            velocidade = desacelerar(velocidade)
            break
        case "3":
            imprimirDados(nomeNave, velocidade)
            break
        default:
            alert("Encerando programa de bordo")
    }
} while(opcaoescolhida != "4")