let prompt = require("prompt-sync")()
let produto1 = "Pão"
let produto2 = "Salsicha"
let produto3 = "Purê de Batata"
let produto4 = "Queijo"
let produto5 = "Bacon"
console.log("===========================")
console.log("FRC's HOTDOGS - CADASTRO DE PREÇO")
console.log("===========================")

console.log("\n")

let custo1 = parseFloat(prompt(`Digite o custo de ${produto1}: R$`))
let custo2 = parseFloat(prompt(`Digite o custo de ${produto2}: R$`))
let custo3 = parseFloat(prompt(`Digite o custo de ${produto3}: R$`))
let custo4 = parseFloat(prompt(`Digite o custo de ${produto4}: R$`))
let custo5 = parseFloat(prompt(`Digite o custo de ${produto5}: R$`))

let lucroDesejado = parseFloat(prompt(`Digite a porcentagem de lucro desejado: %`))
lucroDesejado = lucroDesejado / 100
let lucro1 = custo1 + (custo1 * lucroDesejado)
let lucro2 = custo2 + (custo2 * lucroDesejado)
let lucro3 = custo3 + (custo3 * lucroDesejado)
let lucro4 = custo4 + (custo4 * lucroDesejado)
let lucro5 = custo5 + (custo5 * lucroDesejado)

let card1 = "Cachorro-quente com purê"
let card2 = "Cachorro-quente cremoso"
let card3 = "Cachorro-quente especial"

let cachorroCusto1 = custo1 + custo3 + custo5 + custo2
let cachorroCusto2 = custo1 + (custo2*2) + custo4
let cachorroCusto3 = custo1 + custo2 + custo3 + custo4 + custo5
 
let cachorroLucro1 = lucro1 + lucro3 + lucro5 + lucro2
let cachorroLucro2 = lucro1 + (lucro2*2) + lucro4
let cachorroLucro3 = lucro1 + lucro2 + lucro3 + lucro4 + lucro5

let comboCusto1 = cachorroCusto1 + cachorroCusto2 + cachorroCusto3
let comboLucro1 = cachorroLucro1 + cachorroLucro2 + cachorroLucro3 

console.log("===========================")
console.log("   CARDÁPIO FRC' HOTDOGS")
console.log("===========================")
console.log(`Lucro aplicado: ${lucroDesejado*100}%`)

console.log("\n")

console.log(card1.toUpperCase())
console.log(`Ingredientes: ${produto1}, ${produto2}, ${produto3} e ${produto5}`)
console.log(`Preço de custo: R$${cachorroCusto1}`)
console.log(`Preço de lucro: R$${cachorroLucro1}`)
console.log("------------------------------------------------------")

console.log("\n\n")

console.log(card2.toUpperCase())
console.log(`Ingredientes: ${produto1}, 2 ${produto2}s e ${produto4}`)
console.log(`Preço de custo: R$${cachorroCusto2}`)
console.log(`Preço de lucro: R$${cachorroLucro2}`)
console.log("------------------------------------------------------")

console.log("\n")

console.log(card3.toUpperCase())
console.log(`Ingredientes: ${produto1}, ${produto2}, ${produto3}, ${produto4} e ${produto5}`)
console.log(`Preço de custo: R$${cachorroCusto1}`)
console.log(`Preço de lucro: R$${cachorroLucro1}`)
console.log("------------------------------------------------------")

console.log("\n")

console.log(`COMBO`)
console.log(`Ingredientes: ${card1}, ${card2} e ${card3}`)
console.log(`Preço de custo: R$${comboCusto1}`)
console.log(`Preço de lucro: R$${comboLucro1}`)
console.log("------------------------------------------------------")