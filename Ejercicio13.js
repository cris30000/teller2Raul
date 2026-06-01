/**
 * 13.	El factorial de un número, es el producto obtenido al multiplicar un número dado por todos los enteros positivos sucesivos inferiores. Además, se tiene establecido que los números negativos no poseen factorial y que el factorial de 0 es 1. El factorial se representa con un signo de exclamación precedido de un número (n!).
Por ejemplo:
7! = 7*6*5*4*3*2*1 = 5040
o se puede expresar como:
7! = 1*2*3*4*5*6*7 = 5040.
A 7! se le denomina 7 factorial, también es llamado el factorial de 7.
Teniendo en cuenta el anterior contexto, diseñe un programa que calcule el factorial de un número entero.

 */

//let numero=7;
const prompt =require("prompt-sync")();// para que lea instalo : npm install prompt-sync
let numero = parseInt(prompt("Por favor ingresa un número entero:"));
let factorial = 1;

if (numero < 0) {
    console.log("Los números negativos no tienen factorial");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    console.log("El factorial de " + numero + " es: " + factorial);
}

