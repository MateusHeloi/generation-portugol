const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número do intervalo: ', (inicioStr) => {
  const inicio = parseInt(inicioStr);

  rl.question('Digite o último número do intervalo: ', (fimStr) => {
    const fim = parseInt(fimStr);

    if (inicio >= fim) {
      console.log('\nIntervalo inválido!');
      rl.close();
      return;
    }

    console.log(`\nNo Intervalo entre ${inicio} e ${fim}:\n`);

    for (let i = inicio; i <= fim; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é múltiplo de 3 e 5`);
      }
    }

    rl.close();
  });
});
