let spaceShipName = prompt("Digite o nome da Nave : ")

let caractereSelecionado = prompt("Qual o caractere proibido ?")

let newSpaceshipName = ""

for (pos = spaceShipName.length - 1; pos >= 0; pos--) {
    if (spaceShipName[pos] == caractereSelecionado) {
        break
    }
    newSpaceshipName += spaceShipName[pos]
}

alert("Nome original da Nave : " + spaceShipName + "\nNome após ocultação : " + newSpaceshipName)