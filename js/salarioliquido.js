
const prompt = require('prompt-sync')();


const salarioBruto = parseFloat(prompt('Digite o Salário Bruto: '));
const adicionalNoturno = parseFloat(prompt('Digite o Adicional Noturno: '));
const horasExtras = parseFloat(prompt('Digite as Horas Extras: '));
const descontos = parseFloat(prompt('Digite os Descontos: '));

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`Salário Líquido: ${salarioLiquido.toFixed(2)}`);