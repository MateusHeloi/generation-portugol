const readlineSync = require("readline-sync");

function setValores() {
    const numerosSet = new Set();

    // Solicita 10 números inteiros não repetidos
    while (numerosSet.size < 10) {
        const numero = readlineSync.questionInt(`Digite o ${numerosSet.size + 1}º número inteiro: `);
        if (numerosSet.has(numero)) {
            console.log("Número repetido! Digite outro.");
        } else {
            numerosSet.add(numero);
        }
    }

    console.log("\nListar dados do Set:");
    numerosSet.forEach(num => console.log(num));
}

setValores();
