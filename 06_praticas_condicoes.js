// Aula 06 - Práticas com condições
let prompt = require("prompt-sync")();

let precoP1 = 125.00
let precoP2 = 68.00
let precoS = 42.50
let desconto = 0
let total = 0
console.log("Escolha seu destino: ")
console.log(`1 - São Paulo por R$${precoP1}`)
console.log(`2 - Araraquara por R$${precoP2}`)
let resposta = prompt("Digite uma opção: ")
if(resposta == "1"){
    total += precoP1
}else{
    total += precoP2
}

console.log("\n")

let seguro = prompt(`Deseja adicionar um seguro por mais R$${precoS}?  `)
if(seguro == "SIM"){
    total += precoS
}

console.log("\n")

let cupom = prompt("Digite seu cupom de desconto: ")
if(cupom == "Conradito10"){
    console.log("Parabéns, você recebeu 10% de desconto na sua próxima viagem")
    desconto = 10
}else{
    console.log("Este cupom não exite...")
}

console.log("\n")

let emails = prompt("Você gostaria de receber promoções no seu e-mail? ")
if(emails == "SIM"){
    console.log("Obrigado por se registrar, você receberá novos e-mails em breve!")
}else{
    console.log("Ok, você não receberá e-mails de promoções.")
}

total = total - (total*(desconto/100))
console.log("\n")
console.log(`O total da viagem é de: R$${total}`)

console.log("Formas de pagamento: ")
console.log(`1 - Cartão de crédito (acréscimo de 5%)`)
console.log(`2 - PIX (desconto de 5%)`)
desconto = 5 
resposta = prompt("Digite uma opção: ")
if(resposta == "1"){
    total = total + (total*(desconto/100))  
}else{
    total = total - (total*(desconto/100))
}
console.log("\n")
console.log(`O total a se pagar é de: R$${total}`)
console.log("Obrigado, e volte sempre!")