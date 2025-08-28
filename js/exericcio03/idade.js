const readline = require('readline-sync');

let menoresDe21 = 0;
let maioresDe50 = 0;

while (true) {
    let idade = parseInt(readline.question("Digite uma idade: "));

    if (idade < 0) {
        break; 
    }

    if (idade < 21) {
        menoresDe21++;
    }

    if (idade > 50) {
        maioresDe50++;
    }
}

console.log("Total de pessoas menores de 21 anos: " + menoresDe21);
console.log("Total de pessoas maiores de 50 anos: " + maioresDe50);
