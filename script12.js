//funcao com dois parametros
//function multiply(a,b){
//    return a*b;
//}

//console.log(multiply(5,5));

//PROBLEMA: funcao retorna NaN porque tentou multiplicar numero por undefined
//console.log(multiply(5));
//----NaN----

//SOLUCAO 1: Operador Logico OU
//function multiply(a,b){
    //como undefined não é verdadeiro, o valor de b vai ser 1
 //   b = b || 1;
 //   return a*b;
//}

//console.log(multiply(5));

//PROBLEMA: funcao retorna 5 porque 0 || 1 = 1 tambem
//comporamento atipico da funcao de multiplicao
//console.log(multiply(5,0));

//SOLUCAO 2: Validador de tipo
/*function multiply(a,b){
    b = typeof b === 'undefined' ? 1 : b;
    return a*b;
}

console.log(multiply(5));
console.log(multiply(5,0));*/

//SOLUCAO 3: Valor Padrão (a partir da ES6)
/*function multiply(a,b=1){
    return a*b;
}

console.log(multiply(5));
console.log(multiply(5,0));*/

//lazy evaluation - essa funcao ser invocada quando a outra
//funcao for invocada sem parametro
/*function randomNumber(){
    console.log('Generating a random number...')
    return Math.random()*10;
}

function multiply(a,b=randomNumber()){
    return a*b;
}

console.log(multiply(5));
console.log(multiply(5));*/
