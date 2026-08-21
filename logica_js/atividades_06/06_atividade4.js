let prompt = require("prompt-sync")()

let reg = 50
let peso = parseInt(prompt("Digite o peso de peixes pescados: "))
let excesso = 0
let multa = 0
if(peso > reg){
    excesso = peso - reg
    multa = excesso * 4.25
    console.log(`O peso está ${excesso}kg acima do regulamento (${reg}kg)`)
    console.log(`O valor da multa será de ${multa}`)
}else{
    console.log("Boa João! Seu peso de peixes está dentro do regulamento.")
    console.log("Sem multa.")
}







