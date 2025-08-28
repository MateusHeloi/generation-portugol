const readline = require("readline-sync");

let A = parseInt(readline.question("Digite o número A: "));
let B = parseInt(readline.question("Digite o número B: "));

if (A > B) {
    console.log("A é maior que B");
} else if (A < B) {
    console.log("A é menor que B");
} else {
    console.log("A é igual a B");
}
