
const prompt = require('prompt-sync')();


const salario = parseFloat(prompt('Digite o salário: '));

const abono = parseFloat(prompt('Digite o abono: '));

const novoSalario = salario + abono;

console.log(`O novo salário é: ${novoSalario.toFixed(2)}`);