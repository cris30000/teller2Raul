/**
 * 4.	Escribir un programa que visualize u rombo de asteriscos
 */

let num_lineas=5;
let espacio='';
let asterisco='';

for (let fila = 1;fila <= num_lineas; fila++){

    // para los espacios 
    for (let i = 1; i <= num_lineas - fila; i++) {
        espacio += " ";
    }

   // para los asteriscos

    for (let j = 1; j <= 2 * fila - 1; j++) {
        asterisco += "*";
    }
    

    console.log(espacio + asterisco);
    espacio='';
    asterisco = '';
}

/*
// ahora hacemos la parte de abajo


for (let fila = num_lineas - 1; fila >= 1; fila--) {

    let espacio = "";
    let asterisco = "";

    // ahora para los espacios
    for (let i = 1; i <= num_lineas - fila; i++) {
        espacio += " ";
    }

    // para los Asteriscos
    for (let j = 1; j <= 2 * fila - 1; j++) {
        asterisco += "*";
    }

    console.log(espacio + asterisco);
}
*/


// AHORA SOLO QUE SALGA LA PARTE DERECHA DEL ROMBO