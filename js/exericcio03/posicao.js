const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Índices: 0 1 2 3 4 5 6 7 8 9");
console.log("Vetor:   " + vetor.join(" "));

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o número que você deseja encontrar: ", numeroStr => {
  const numero = parseInt(numeroStr);
  const posicao = vetor.indexOf(numero); 

  if (posicao !== -1) {
    console.log(`O número ${numero} está localizado na posição: ${posicao}`);
  } else {
    console.log(`O número ${numero} não foi encontrado!`);
  }

  readline.close();
});
