/**
 * Ejecutar y visualizar el programa siguiente que
imprime una tabla de m filas por n columnas y un
carácter prefijado. (El usuario proporciona estos
datos desde consola)
 */

const prompt =require("prompt-sync")();// para que lea instalo : npm install prompt-sync
let mfila = parseInt(prompt("Por favor ingresa un número de filas:"));
let ncolumna = parseInt(prompt("Por favor ingresa un número de columna:"));
let caracter = (prompt("Por favor ingrese el caracter o simbolo a imprimir:"));

console.log("Esta es tu tabla");
// recorremos con un for

for(let i=0; i < mfila; i++){
    let fila="";
    for(let j=0; j < ncolumna; j++ ){
        fila=fila+caracter +" ";
    }
    console.log(fila);
}



