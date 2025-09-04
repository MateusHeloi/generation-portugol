const readlineSync = require("readline-sync");

function arrayCores() {
    const cores = [];

    // Solicita 5 cores ao usuário
    for (let i = 0; i < 5; i++) {
        const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
        cores.push(cor);
    }

    console.log("\nListar todas as cores:");
    cores.forEach(cor => console.log(cor));

    // Ordena e mostra as cores em ordem crescente
    console.log("\nOrdenar as cores:");
    const coresOrdenadas = [...cores].sort();
    coresOrdenadas.forEach(cor => console.log(cor));
}

arrayCores();
