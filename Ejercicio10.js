/**
 * Imprimr el abecedario al reves y cada iteraciion quietarle una letra hasta llegar a la A
 */
//let abecedario="ZYXWVTSRQPONMLKJIHGFEDCBA";

//let i=0;
/*
while(i<abecedario.length){
    console.log(abecedario.substring (i));//substring(i) imprime la cadena desde  la posicion i hasta el  final
    i++
}*/

let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let i = abecedario.length;

while (i > 0) {
    console.log(abecedario.substring(0, i));
    i--;
}