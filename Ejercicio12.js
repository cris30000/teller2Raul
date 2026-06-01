/**
 * Imprimir el abecedario al reves donde la primera letra ens Z y va aumentando hasta completar todo el abecedario al reves
 * 
 */

let abecedario="ZYXWVUTSRQPONMLKJIHGFEDCBA";
for(let i=0; i<abecedario.length;i++){
    let linea="";// control cuantas filas se imprimen
     // ahora lo anida con otro for que me imprime la letra

     for(let j=0;j<=i;j++){
        linea=linea+abecedario[j]+ "";
     }
     console.log(linea);
}