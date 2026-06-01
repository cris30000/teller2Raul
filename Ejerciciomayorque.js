const prompt = require('prompt-sync')();

let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));
let num3 = Number(prompt("Ingrese el tercer numero: "));

let suma = num1 + num2 + num3;

let menor = num1;

if (num2 < menor) {
    menor = num2;
}

if (num3 < menor) {
    menor = num3;
}

console.log("La suma es:", suma);
console.log("El numero menor es:", menor);