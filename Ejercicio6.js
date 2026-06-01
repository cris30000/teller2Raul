/**
 * 6.	Escribir un programa que visualize asteriscos
 */

let num_lineas = 5;

for (let fila = 1; fila <= num_lineas; fila++) {
    let asterisco = "";

    for (let x = 1; x <= fila; x++) {
        asterisco += "*";
    }

    console.log(asterisco);
}