/**
 * Imprimir todos los números primos entre 2 y 1.000 inclusive.
 */

function esPrimo(n){
    // aqui analizo si n es menor a 2 entonces no es primo por eso es false
    if(n<2)
        return false;


    for (let i=2; i<=Math.sqrt(n);i++){

    
    
        if(n % i===0 )
            return false
    }
    return true;
}

    // ahora para imprimirlos
    for  (let i=2;i<=1000;i++){
        if (esPrimo(i)){
            console.log(i);

        }
    }
    



