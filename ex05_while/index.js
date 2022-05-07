
let Navename = prompt("Digite o nome da sua Nave")
let dobras = 0
let option = ""

option = prompt("Deseja entrar em dobra espacial? \n1- sim\n2- Não")

while(option == "1") {
    dobras += 1
    option = prompt("deseja realizar a proxima dobra? \n1- Sim \n2- Não")
}

alert("Nave : " + Navename + "\nQuantidade de dobras : " + dobras)