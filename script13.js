//Forma Classica
/*var prop1 = 'Digital Innovation One';
var obj = {
    //prop1: 'Digital Innovation One'
    //PROBLEMA: acaba repetindo a palavra
    prop1: prop1
};

console.log(obj);*/

//SOLUCAO: SHORTHAND (com ES6)
/*var prop1 = 'Digital Innovation One';
function method1(){
    console.log('method called');
}
var obj = {
    prop1,
    method1,
    //sum: function sum(a,b){
    //    return a+b;
    //}
    //funciona igual ao codigo acima
    sum(a,b){
            return a+b;
    }
};

console.log(obj);
obj.method1();
console.log(obj.sum(5,5));*/

//Forma Classica
/*var propName = 'test';
//PROBLEMA: necessidade de criar objeto antes para fazer atribuicao em seguida
var obj = {};
obj[propName + 'concat'] = 'prop value';
console.log(obj);*/

//SOLUCAO; SHORTHAND (com ES6)
//var propName = 'test';
//var obj = {
//    [propName + 'concat']:'prop value'
//};
//console.log(obj)
