/**
 * Genere e imprima los múltiplos de 3 que se encuentren entre 6 y n, donde n tiene que ser superior a 6.
 */

let n= 30;
let numero=6;

while (numero<=n){
    console.log(numero);
    numero=numero+3;// va aumentando de 3 en tres los multiplos
    numero=numero+2;    // va aumentando de 2 en dos para que no imprima los multiplos de 2
}
