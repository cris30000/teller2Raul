/**
 * Sumar los números enteros de 1 a 100 mediante:
a) sentencia do-while; b) sentencia while; c)
sentencia for.
 */

let i=1;
let suma=0;
let resta=0;
let division=1;

while(i<=100){
   suma +=i;
   //resta -=i;
    i++;
}
console.log("la suma es: " +suma);
//console.log("la resta es: " +resta);


let i = 1;
let division = 1;

while(i <= 100){
    division /= i;
    i++;
}

console.log("La division es: " + division);