/**
 * Media piramide
 */
let numlineas = 5;

// Parte de arriba
for (let fila = 1; fila <= numlineas; fila++) {
    let asterisco = ""; 
    for (let j = 1; j <= fila; j++) {
        asterisco += "*";
    }
    console.log(asterisco);
}

// Parte de abajo
for (let fila = numlineas - 1; fila >= 1; fila--) {
    let asterisco = ""; 
    for (let j = 1; j <= fila; j++) {
        asterisco += "*";
    }
    console.log(asterisco);
}