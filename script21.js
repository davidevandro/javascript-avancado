//PROBLEMA: Como adaptar a funcao para multiplos argumentos

//SOLUCAO CLASSICA: Maneira iterativa
/*function sum(a,b){
    var value = 0;
    for (var i = 0; i< arguments.length;i++){
        value += arguments[i]
    }
    return value;
}8?

console.log(sum(5,5,2,3));*/

//SOLUCAO ES6: rest operator ...
/*function sum(...args){
    //args tem prototype Array
    //arguments tem prototype Object
    return args.reduce((acc,value) => acc+value,0);
}

console.log(sum(5,5,5,2,3));*/

//rest operator e arrow functions
/*const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}

sum(5,5,5,2,3);*/

//===============spread operator
/*const multiply = (...args) => args.reduce((acc, value) => acc*value,1);
const sum = (...rest) => {
    //pega todos os itens do Array rest e transforma em parametros da funcao apply
    return multiply(...rest);
}

console.log(sum(5,5,5,2,3));*/

//spread operator funciona com strings, arrays, literal objects e objetos iteraveis
/*const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function LogArgs(...args){
    console.log(args);
}

LogArgs(...str);
//--------["D", "i", "g", "i", "t", "a", "l", " ", "I", "n", "n", "o", "v", "a", "t", "i", "o", "n", " ", "O", "n", "e"]
LogArgs(...arr);

//forma comum de juntar dois arrays
const arr2 = [5,6,7].concat(arr);
//com spread operator
const arr3 = [...arr, 5,6,7];
const arr4= [...arr2, ...arr, 0, 0,0 ];

const obj = {
    test:123
};

//spread operator para objeto
const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

//gerar clone de objetos
//clone raso
const obj3 = {...obj};*/