// variaveis
let playerName = "wellimovel"
let vitorias = 100
let derrotas = 5
let saldo = saldoVitoria(vitorias, derrotas);
let nivel = ranking(saldo);

//função para subtração das vitórias x derrotas
function saldoVitoria(saldoVitoria) {
    let somaVitorias = vitorias - derrotas
    return somaVitorias;
}

// função para classificar o nivel
function ranking(ranking) {
if (ranking < 10) {
  rank = "Ferro";
} else if (ranking > 11 && ranking < 20) {
  rank = "Bronze";
} else if (ranking > 21 && ranking < 50) {
  rank = "Prata";
} else if (ranking > 51 && ranking < 60) {
  rank = "Ouro";
} else if (ranking > 61 && ranking < 70) {
  rank = "Platina";
} else if (ranking > 71 && ranking < 80) {
  rank = "Ascendente";
} else if (ranking > 81 && ranking < 90) {
  rank = "Imortal";
} else if (ranking >= 91) {
  rank = "Radiante";
}
  return rank;
}


// retornos gerais
console.log("Nome do Jogador: " + playerName);
console.log("Vitórias "+ vitorias)
console.log("Derrotas " + derrotas)

//Saida
console.log("O Herói tem de saldo de vitórias positivas de " + saldo  + " e está no nível de " + nivel);


// para executar o script colar o comando no terminal: node desafioranqueada.js
