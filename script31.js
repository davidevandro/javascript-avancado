//Symbols
/*
//valor so serve de debug, mas nao esta ligado ao valor da variavel de fato
const uniqueId = Symbol('Hello');
//apesar de ter o mesmo nome do uniqueId, serão diferentes porque são Symbol
const uniqueId2 = Symbol('Hello');

//criar propriedade para o objeto que so pode ser acessada por quem tiver o symbol
//eh uma forma de ocultar a propriedade e emular em alguma medida a propriedade privada
const obj = {
    [uniqueId]: 'Hello'
}

console.log(obj);*/

//Well Known Symbols
//Symbol.iterator

const arr = [1,2,3,4];

//construindo iterator
//const it = arr[Symbol.iterator]();

/*
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

*/

//equivalente aos console.log acima
/*while (true){
    let {value, done} = it.next();
    if (done){
        break;
    }
    console.log(value)
}*/

//funciona para string
//const str = 'Digital Innovation One';

//iterator
//for (let value of str){
//    console.log(value);
//}

/*//iterador em obj
const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++;

                return{
                    value: this.values[i-1],
                    done: i>this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();
console.log(it.next());

//com isso e possivel fazer esse tipo de loop e spreads
for (var value of obj){
    console.log(value);
}

*/

