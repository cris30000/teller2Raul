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
        if (j > 1) {
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