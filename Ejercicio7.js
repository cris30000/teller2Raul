/**
 * 7.	Escribir un programa que visualice la siguiente salida:  numeros creciente y numeros decreciente
 * 
 */

// defino a  4 como maximo  y luego empieza a disminuir


let max = 4;

// parte de arriba hasta 4
for (let i = 1; i <= max; i++) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
        if (j >1) {
            linea += " ";  
        }
        linea += j;
    }

    console.log(linea);
}

// Parte de abajo decrece
for (let i = max - 1; i >= 1; i--) {
    let linea = "";

    for (let j = 1; j <= i; j++) {
        if (j > 1) {
            linea += " ";
        }
        linea += j;
    }

    console.log(linea);
}

/*
for (let i = max - 1; i >= 1; i--) {
    let linea = "";

    for (let j = 1; j <= i; j++) {

        if (i % 2 == 1) {
            linea += "* ";
        } else {
            linea += "$ ";
        }
    }

    console.log(linea);
}*/










































/*
// Parte de arriba
for (let i = 1; i <= max; i++) {
    let linea = "";

    for (let j = max; j >= max - i + 1; j--) {
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
}*/