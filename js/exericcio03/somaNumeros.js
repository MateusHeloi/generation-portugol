const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let somaPositivos = 0;

function pedirNumero() {
  rl.question("Digite um número (0 para sair): ", (resposta) => {
    const numero = parseInt(resposta);

    if (numero > 0) {
      somaPositivos += numero;
    }

    if (numero !== 0) {
      pedirNumero(); 
    } else {
      console.log("A soma dos números positivos é: " + somaPositivos);
      rl.close(); 
    }
  });
}

pedirNumero();
