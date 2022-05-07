let namePilot = prompt('Digite o nome do piloto :')

let Velocity = 0

let setVelocity = prompt('A qual velocidade gostaria de ir ?')

let confirma = confirm('Confirma alterar velocidade para ' + setVelocity + ' Km/s  ?')
if (confirma == true) {
    Velocity = setVelocity
} else {
    Velocity = 0
}

alert('Nossa velocidade atual é :' + Velocity)

if (Velocity <= 0) {
    alert('Nave está parada. Considere partir e aumentar a velocidade !!')
} else if (Velocity < 40) {
    alert('Você está devagar, podemos aumentar mais!!')
} else if (Velocity < 80) {
    alert('Parece uma boa velocidade para manter !!')
} else if (Velocity < 100) {
    alert('Velocidade alta. Considere diminuir !!')
} else {
    alert('Velocidade perigosa. Controle automático forçado !!')
}

alert('Nome do piloto : ' + namePilot + '\n\nVelocidade atual  : ' + Velocity + ' Km/s')
