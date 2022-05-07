let spaceShip = prompt("Digite o nome da espaçonave: ")

let newSpaceship = ""

let letraSubstituir = prompt("Qual caractere deseja substituir ?")

let letraInserir = prompt("Qual caractere deseja incluir ?")

for(i = 0; i < spaceShip.length; i++) {
    if(spaceShip[i] == letraSubstituir) {
        newSpaceship += letraInserir
    }else {
        newSpaceship += spaceShip[i]
    }
}

alert(" O Novo nome da Nave é : " + newSpaceship)

