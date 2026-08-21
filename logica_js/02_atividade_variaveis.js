let nome = "Kauã Piovani da Silva"
let idade = 19
let cpf = "123.456.789-0"
let end = "Rua do caixa prego"
let tel = "(16) 991054621"
let data = "23/07/2007"
let saldoInicial = 2000.00
let dAtivo = true
let cAtivo = false
let limite = 550.99

if (dAtivo){
    dAtivo = "Ativo"
}else{
    dAtivo = "Não está ativo"
}

if (cAtivo){
    cAtivo = "Ativo"
}else{
    cAtivo = "Não está ativo"
}
console.log(`
    Banco do FRC
    Nome do cliente: ${nome}
    Idade: ${idade}
    Endereço: ${end}
    Telefone: ${tel}
    Data de Nascimento: ${data}
    Saldo Inicial: R$${saldoInicial.toFixed(2)}
    Débito: ${dAtivo}
    Crédito: ${cAtivo}
    Limite Inicial do crédito: R$${limite.toFixed(2)}
    `)