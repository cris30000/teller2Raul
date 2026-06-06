/**
 * 6.	Escribir un programa que visualize asteriscos
 */

let num_lineas = 5;



for (let fila = 1; fila <= num_lineas; fila++) {
    let asterisco = "";
    //let numero="";

    for (let x = 1; x <= fila; x++) {
        asterisco += "*";
        //numero += x;

    }

    console.log(asterisco);
}





//invertir el rombo
for (let fila = num_lineas - 1; fila >= 1; fila--) {
    let asterisco = "";
    //let numero="";    
    for (let x = 1; x <= fila; x++) {
        asterisco += "*";
        //numero += x;  
    }

    console.log(asterisco);
}   











/*

for (let fila = num_lineas - 1; fila >= 1; fila--) {
    let numero = asterisco = "";

    for (let x = 1; x <= fila; x++) {
        asterisco += "*";
       
    }

    console.log(asterisco);
}   
*/




/*
let num_lineas = 5;

for (let fila = 1; fila <= num_lineas; fila++) {
    let linea = "";

    for (let x = 1; x <= fila; x++) {

        if (fila % 2 == 1) {
            linea += "*";
        } else {
            linea += "$";
        }
    }

    console.log(linea);

    
}*/