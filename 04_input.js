// Aula 04: INPUT
let prompt = require('prompt-sync')();


let nome = prompt("Olá, digite o seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Olá, digite o sua idade: ")
let nomeCompleto = nome + " " + sobrenome
console.log(`Seja Bem-Vindo(a) ${nomeCompleto} você tem ${idade} Anos XD`)


let produto1 = prompt("Digite o nome de um produto: ")
let preco1 = prompt(`Digite o preço de ${produto1}: R$`)
let produto2 = prompt("Digite o nome de outro produto: ")
let preco2 = prompt(`Digite o preço de ${produto2}: R$`)

console.log("----- RELATÓRIO -----")
console.log(`${produto1} - R$${preco1}`)
console.log(`${produto2} - R$${preco2}`)
