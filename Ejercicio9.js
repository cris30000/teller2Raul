/**
 * Diseñar un algoritmo que sume los m = 30 primeros números pares.
 */
let suma=0;
let contador=1;

// hacemos un mientras el contador sea menor a 30 vaya sumando 

while(contador<=30){
    let par= contador*2;
    console.log("el numero es:"+par)
    suma=suma+par;
    contador++;
}
console.log("los 30 primeros numeros son:"+suma);