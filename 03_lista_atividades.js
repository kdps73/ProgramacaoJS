/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/

let linha = " _____"
let coluna = "|     |"
console.log(linha)
console.log(coluna)
console.log(coluna)
console.log(coluna)
console.log(coluna)
linha = "|_____|"
console.log(linha)

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/

let cidade = "São Carlos"
let estado = "São Paulo"
console.log(`
    Eu moro em ${cidade} - ${estado}`)

/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/

let numero1 = 5
let numero2 = 11
let soma = numero1 + numero2
console.log(`
    A soma dos números ${numero1} e ${numero2} é: ${soma}`)

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/

let idade = 19
let futuro = idade + 10
console.log(`
    Olá, você tem ${idade} anos e daqui a 10 anos terá ${futuro} anos`)

/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero = 5
let dobro = numero * 2
let triplo = numero * 3
console.log(`
    O dobro e o triplo do número ${numero}, respectivamente é: ${dobro} e ${triplo}`)

/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let nome1 = "Azeite"
let preco1 = 9.99
let nome2 = "Ólho"
let preco2 = 6.99
console.log(`
    O produto ${nome1} custa ${preco1} e o produto ${nome2} custa ${preco2}`)

let totalPreco = preco1 + preco2
console.log(`
    O total da compra será de: R$${totalPreco}`)

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 1800.00
let aumento = 500.00
let inss = 250.00
let nSalario = salario + aumento - inss
console.log(`
    O salário foi de R$${salario} para R$${nSalario} com os aumentos e descontos de R$${aumento} e R$${inss}`)

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/

let mesada = 100
let gastos = 35
let sobrou = mesada - gastos
console.log(`
    João recebe R$${mesada} de mesada e gastou R$${gastos}, sobrando apenas R$${sobrou}`)

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/

let base = 2
let altura = 6
let modo = "cm"
let area = base * altura
console.log(`
    A base do retângulo vale ${base}${modo} e a altura ${altura}${modo}, a área dele é de: ${area}${modo}²`)

/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para  e mostre na tela os valores da conversão

*/

let celsius = 25
let fah = (celsius * 9/5) + 32
let kel = celsius + 273.15
console.log(`
    ${celsius} graus celsius equivalem a ${fah} fahrenheit e a ${kel} kelvin`)

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/

let hora = 3
let minuto = hora * 60
let segundo = minuto * 60
console.log(`
    ${hora} horas correspondem a ${minuto} ou ${segundo}`)

/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let a1 = 5
let b1 = 10
console.log(`
    O valor antes da troca é de: Primeiro ${a1} e segundo ${b1}`)
let troca = a1
a1 = b1
b1 = troca
console.log(`
    O valor trocado das váriaveis: Primeiro ${a1} e Segundo ${b1}`)

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

let distancia = 20
let combustivel = 4
let precLitro = 3.99
let kmL = distancia/combustivel
let total = combustivel * precLitro

console.log(`
    A distância percorrida foi de: ${distancia}km;
    A quantidade de litros usados foi de: ${combustivel}L;
    O consumo do carro foi de: ${kmL}km/L;
    O valor total com combustível foi de R$${total};`);
