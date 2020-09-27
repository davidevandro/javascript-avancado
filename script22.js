/*var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

//CLASSICO: atribuir cada um dos valores do array para uma variavel
//forma perigosa e dependente de saber a quantidade de itens a priori
var apple = arr[0];
//var banana = arr[1];
//var orange = arr[2];
var tomato = arr[3][0];

//ES6 - Destructuring Assignment com array
var [apple2, banana2, orange2,[tomato2]] = ['Apple', 'Banana', 'Orange',['Tomato']];

console.log(tomato, tomato2);*/

//ES6 - Destructuring Assignment com Object
/*var obj = {
    name: 'Celso',
    props:{
        age:26,
        favoriteColors: ['black', 'blue']
    }
};

var {name} = obj;
var {name: name2} = obj;
var {props:{age}} = obj;
var {props:{age:age2, favoriteColors:[fav1, fav2]}} = obj;
console.log(age, name, age2, fav1, fav2);*/