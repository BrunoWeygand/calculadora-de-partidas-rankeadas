//Função saldo de vitórias
function saldo(vitorias, derrotas) {
    return vitorias - derrotas
}

//Variáveis
let saldoVitorias = saldo(40, 3)
let nivel

//Estrutura de decisão de nivel com base no saldo de vitórias
if(saldoVitorias <= 10){
    nivel = "Ferro"
} else if(saldoVitorias <= 20){
    nivel = "Bronze"
} else if(saldoVitorias <= 50){
    nivel = "Prata"
} else if(saldoVitorias <= 80){
    nivel = "Ouro"
} else if(saldoVitorias <= 90){
    nivel = "Diamante"
} else if(saldoVitorias <= 100){
    nivel = "Lendário"
} else{
    nivel = "Imortal"
}

console.log("O Herói tem de saldo " + saldoVitorias + " está no nivel de " + nivel)