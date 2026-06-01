/**
 *  visualizar medio triangulo de 6 
 */


let numlineas = 6;
//let espacio="";// le agrego espacios si quiero que quede completo de lo contrario no lo utilizo
let asterisco ="";

// recorremos con un for

for(let fila=1; fila <= numlineas; fila++){
    
    //for(let i=1; i <= numlineas -fila ; i++ ){
        //espacio +=" ";
    //}
    for(let j=1; j <=1 *fila-1 ; j++ ){
        asterisco +="*";
    }
    console.log(asterisco);
   // console.log(espacio + asterisco);
   // espacio="";
    asterisco="";
}
