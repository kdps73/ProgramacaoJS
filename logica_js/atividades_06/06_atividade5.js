let prompt = require("prompt-sync")()

let time1 = prompt("Digite o nome do primeiro time: ")
let gols1 = prompt("Digite o número de gols do primeiro time: ")
let time2 = prompt("Digite o nome do segundo time: ")
let gols2 = prompt("Digite o número de gols do segundo time: ")

if(gols1 > gols2){
    console.log(`TIME VENCEDOR: ${time1}`)
}else if(gols1 < gols2){
    console.log(`TIME VENCEDOR: ${time2}`)
}else{
    console.log(`EMPATE: ${gols1} a ${gols2}`)
}
