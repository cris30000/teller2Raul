/**
 * 2.	Imprimir las treinta primeras potencias de 4, es decir, 
 * 4 elevado a 1, 4 elevado a 2, etc. y encontrar la potencia mas grande
 */

let resultado=1;


for(let i=1; i<=30;i++){
    resultado= resultado *4;

    
    
    console.log(" 4 elevado a :"+i+"="+resultado);
}
    
    














/*

    
let resultado=1;
let potenciaMayor=0;
let potenciaMenor=null;

for(let i=1; i<=30;i++){
    resultado= resultado *4;

    if (resultado > potenciaMayor){
        potenciaMayor=resultado;
    }
    if (potenciaMenor === null || resultado < potenciaMenor){

        potenciaMenor=resultado;
    }
        
    
    console.log(" 4 elevado a :"+i+"="+resultado);
}
    
    console.log("La potencia mayor es: "+potenciaMayor);
    console.log("La potencia menor es: "+potenciaMenor);

    */