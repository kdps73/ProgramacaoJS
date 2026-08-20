let prompt = require("prompt-sync")()

let n1 = parseInt(prompt("Digite um número: "))
let n2 = parseInt(prompt("Digite outro número: "))
if(n1 > n2){
    console.log(`Entre os números ${n1} e ${n2} o maior é o ${n1}`)
}else if(n2 > n1){
    console.log(`Entre os números ${n1} e ${n2} o maior é o ${n2}`)
}else{
    console.log(`Os números ${n1} e ${n2} são iguais`)
}