// Aula 05: Porcentagem
let prompt = require("prompt-sync")() //importar
let valor = parseFloat(prompt("Digite o valor original: R$"))
let desconto = parseFloat(prompt("Digite a porcentagem de desconto: %"))
desconto = desconto / 100
let total = valor * desconto
let valorComDesconto = valor - total
console.log(total)