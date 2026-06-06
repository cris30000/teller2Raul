
let max = 4;
// Parte de arriba
for (let i = 1; i <= max; i++) {
    let linea = "";

    for (let j = max; j >= max - i + 1; j--) {

else 
        if (j < max) {
            linea += " ";
        }
        linea += j;
    }

    console.log(linea);
}

// Parte de abajo
for (let i = max - 1; i >= 1; i--) {
    let linea = "";

    for (let j = max; j >= max - i + 1; j--) {

        if (j < max) {
            linea += " ";
        }
        linea += j;
    }

    console.log(linea);
}