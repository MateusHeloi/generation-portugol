const readline = require("readline-sync");

let numero = parseInt(readline.question("Digite um número: "));

let resultado = `O Número ${numero} é `;

if (numero % 2 === 0) {
    resultado += "par";
} else {
    resultado += "ímpar";
}

if (numero >= 0) {
    resultado += " e positivo!";
} else {
    resultado += " e negativo!";
}

console.log(resultado);
