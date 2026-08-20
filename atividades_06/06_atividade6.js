let prompt = require("prompt-sync")()

let tel = prompt("Telefonou para a vítima? ")
let loc = prompt("Esteve no local do crime? ")
let liv = prompt("Mora perto da vítima? ")
let dev = prompt("Devia para a vítima? ")
let job = prompt("Já trabalhou com a vítima? ")
let contador = 0

if(tel == "SIM"){
    contador += 1
}

if(loc == "SIM"){
    contador += 1
}

if(liv == "SIM"){
    contador += 1
}

if(dev == "SIM"){
    contador += 1
}

if(job == "SIM"){
    contador += 1
}

if(contador == 2){
    console.log("A pessoa é Suspeita.")
}else if(contador >= 3 && contador <= 4){
    console.log("A pessoa é Cúmplice")
}else if(contador == 5){
    console.log("A pessoa é Assassina")
}else{
    console.log("A pessoa é Inocente")
}