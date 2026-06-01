let max = 6;
let letras = ["A", "B", "C", "D", "E", "F"];

// Parte de abajo decrece
for (let i = max - 1; i >= 1; i--) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
        if (j > 1) {
            linea += " ";
        }

        linea += letras[j - 1];
    }

    console.log(linea);
}