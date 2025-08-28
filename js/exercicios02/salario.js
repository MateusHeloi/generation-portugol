const readline = require("readline-sync");

let nome = readline.question("Nome do colaborador: ");
let codigo = parseInt(readline.question("Código do Cargo (1 a 6): "));
let salario = parseFloat(readline.question("Salário: "));

let cargo = "";
let percentual = 0;
console.log("1 10% - Gerente");
console.log("2 7%  - Vendedor");
console.log("3 9%  - Supervisor");  
console.log("4 6%  - Motorista");
console.log("5 5%  - Estoquista");
console.log("6 8%  - Técnico de TI");



switch (codigo) {
    case 1:
        cargo = "Gerente";
        percentual = 0.10;
        break;
    case 2:
        cargo = "Vendedor";
        percentual = 0.07;
        break;
    case 3:
        cargo = "Supervisor";
        percentual = 0.09;
        break;
    case 4:
        cargo = "Motorista";
        percentual = 0.06;
        break;
    case 5:
        cargo = "Estoquista";
        percentual = 0.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percentual = 0.08;
        break;
    default:
        console.log("⚠ Código inválido! Digite um valor entre 1 e 6.");
        process.exit();
}

let novoSalario = salario + (percentual * salario);

console.log(`\nNome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
