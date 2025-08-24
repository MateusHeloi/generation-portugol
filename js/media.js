
const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));
const nota3 = parseFloat(prompt('Digite a terceira nota: '));
const nota4 = parseFloat(prompt('Digite a quarta nota: '));

// 2. Calcula a média
const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${mediaFinal.toFixed(1)}`);