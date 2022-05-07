alert('Exercicio de JavaScript')
let nomeVelha = prompt('Digite o nome da pessoa mais velha :')
let ageVelha = prompt('digite a idade da pessoa mais velha :')
let nomeNova = prompt('Digite o nome da pessoa mais nova :')
let ageNova  = prompt('digite a idade da pessoa nova :')

let dif_idade = ageVelha - ageNova

alert('\nO nome da pessoa mais velha é : '+ nomeVelha + '\nSua idade é : ' + ageVelha + ' anos' + 
'\n\nO nome da pessoa mais nova é : ' + nomeNova + '\nSua idade é : ' + ageNova + ' anos' + 
'\n\nA diferenca de idade entre eles é de ' + dif_idade + ' anos')
