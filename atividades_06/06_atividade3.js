let prompt = require("prompt-sync")()

let altura = parseFloat(prompt("Digite a sua altura (metros): "))
let peso = parseFloat(prompt("Digite a seu peso (kilos): "))
let imc = peso / (altura**2)

if(imc >= 18.5 && imc <= 24.9){
    console.log("Você está no peso ideal!")
}else if(imc >= 25.0 && imc <= 29.9){
    console.log("Você está acima do peso (sobrepeso)")
}else if(imc >= 30){
    console.log("Você está obeso")
}else{
    console.log("Você está abaixo do peso")
}