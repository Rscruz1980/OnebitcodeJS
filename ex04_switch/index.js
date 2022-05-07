let distanciAnosluz = prompt("Digite a distância em anos-luz: ")

let listaOpcoes = prompt("Escolha uma das opções para conversão: \n1- Parsec \n2- Unidade astronômica \n3- Quilômetros")

switch(listaOpcoes) {
    case "1":
        let Parsecdistance = distanciAnosluz * 0.306601
        alert("Distância em anos-luz : " + distanciAnosluz + " l.y" + "\nDistância em Parsec : " + Parsecdistance + " pc")
        break
    case "2":
        let astronomicaDistance = distanciAnosluz * 63241.1
        alert("Distância em anos-luz : " + distanciAnosluz + " l.y" + "\nDistância em Unidade astronômica  : " + astronomicaDistance + " AU")
        break
    case "3":
        let QuilôletrosDistance = distanciAnosluz * (9.5 * Math.pow(10,12))
        alert("Distância em anos-luz : " + distanciAnosluz + " l.y" + "\nDistância em Quilômetros : " + QuilôletrosDistance + " Km")
        break
    default:
        alert("Distância em anos-luz "+ distanciAnosluz + " l.y" + "\nUnidade não identificada : Conversão fora do escopo")
}
