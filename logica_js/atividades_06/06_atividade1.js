let prompt = require("prompt-sync")()

let n = parseInt(prompt("Digite um número: "))

if(n >= 0){
    console.log(`O número ${n} é positivo`)
}else{
    console.log(`O número ${n} é negativo`)
}