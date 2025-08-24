
const prompt = require('prompt-sync')();

const n1 = parseFloat(prompt('Digite o primeiro número: '));
const n2 = parseFloat(prompt('Digite o segundo número: '));
const n3 = parseFloat(prompt('Digite o terceiro número: '));
const n4 = parseFloat(prompt('Digite o quarto número: '));

const diferenca = (n1 * n2) - (n3 * n4);


console.log(`Diferença: ${diferenca.toFixed(1)}`);