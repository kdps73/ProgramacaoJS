// Aula 04: Converter variáveis
let prompt = require('prompt-sync')()

// let numero1 = parseInt(prompt("Digite um número: "))
// numero1 = parseInt(numero1)
// let numero2 = parseInt(prompt("Digite outro número: "))
// let soma = numero1 + numero2
// console.log(soma)

// Atividade 1:
let data = parseInt(prompt("Digite o ano que você nasceu: "))
let idade = 2026 - data
console.log(idade)

// Atividade 2:
let n1 = parseFloat(prompt("Digite a primeira nota: "))
let n2 = parseFloat(prompt("Digite a segunda nota: "))
let n3 = parseFloat(prompt("Digite a terceira nota: "))
let med = (n1+n2+n3)/3
console.log(med)

// Atividade 3:
let produto = prompt("Digite o nome do produto: ")
let preco = parseFloat(prompt("Digite o preço do produto: R$"))
let quant = parseInt(prompt("Digite a quantidade em estoque do produto: "))
let fatura = preco * quant
console.log(`Caso o produto ${produto} seja totalmente vendido, a fatura será de: R$${fatura}`)