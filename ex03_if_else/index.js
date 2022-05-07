let entradaDataPartida = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let  dataPartida = moment(entradaDataPartida, "DD/MM/YYYY")

let dataHoje = moment()

let diferencaData = dataHoje - dataPartida

let opcaoEscolhida = prompt('Escolha como gostaria de exibir o tempo de partida : \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias')

if(opcaoEscolhida == 1){
    let segundosPartida = Math.round(diferencaData/1000)
    alert('Tempo de vôo : ' + segundosPartida + ' segundos')
}else if(opcaoEscolhida == 2){
    let minutosPartida = Math.round(diferencaData / 1000 / 60)
    alert('Tempo de vôo : '+ minutosPartida + ' minutos')
}else if(opcaoEscolhida == 3){
    let horasPartida = Math.round(diferencaData / 1000 / 60 / 60)
    alert('Tempo de vôo : '+ horasPartida + ' horas')
}else if(opcaoEscolhida == 4){
    let diasPartida = Math.round(diferencaData / 1000 / 60 / 60 / 24)
    alert('Tempo de vôo : '+ diasPartida + ' dias')
}else {
    alert('Opção inválida')
}

