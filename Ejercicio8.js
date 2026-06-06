
/**
 * 8.	Diseñar e implementar un programa que solicite a su usuario un valor no 
 * negativo n y visualice la siguiente salida (n = 6):
 */

let max = 6;


/*
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
}*/
// parte de arriba crece
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
