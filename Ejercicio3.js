/**
 * Imprimir todos los números primos entre 2 y 1.000 inclusive.
 */



console.log("Los numeros primos entre 2 y 1000 son: ");

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

// AHORA QUE ME IMPRIMA  DE ESTOS PRIMOS LOS MULTIPLOS DE 3

    // ahora para imprimirlos
    for  (let i=2;i<=1000;i++){
        if (esPrimo(i)){
            console.log(i);

            if (i % 3 ===0){
                console.log(i + " es multiplo de 3");
            }

        }
    }
    












    
    /*
    
    console.log("los numeros pares son:");

    for (let i=2; i<=10;i++){
        if (i % 2 ===0){
            console.log(i);
        }   
    }
    console.log("Los numeros impares son:");

    for (let i=2; i<=10;i++){
        if (i % 2 !==0){
            console.log(i);
        }   
    }


*/
