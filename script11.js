//funcao normal
//function log(value){
//    console.log(value);
//}

//funcao anonima
//var log = function(value){
//    console.log(value);
//}

//log('teste');

//funcao anonima com return
//var sumOld = function(a,b){
//    return a+b;
//}

//console.log(sumOld(5,5));

//funcao construtora
//function Car(){
//    this.foo = 'bar'
//}
//console.log(new Car());

//=======Arrow functions (funcoes anonimas em ES6)=========
//funcao dois argumentos e return implicito
//var sum = (a,b) => a+b;
//console.log(sum(5,5));

//funcao um argumento e return implicito
//var sum2 = a => a+5;
//console.log(sum2(4));

//funcao sem argumento e return de objeto
//var createObj = () => ({test:12});
//console.log(createObj());

//nao funciona funcao construtora com arrow function
//var Car = () => {
//    this.foo = 'bar';
//}

//console.log(new Car());
//-------TypeError: Car is not a constructor

//================Contexto de Invocacao========
//em js comumente tinhamos o problema abaixo
/*var obj = {
    showContext: function showContext() {
        //this referencia o proprio objeto
        this.log('teste');
        //funcao de timeout tem contexto de invocacao global
        //this nao referencia mais object
        setTimeout(function(){
            this.log('after 1000ms');
        },1000);
        //----TypeError: this.log is not a function
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext();*/

//Solucao 1
/*var obj = {
    showContext: function showContext() {
        //this referencia o proprio objeto
        this.log('teste');
        //funcao de timeout com contexto especificado
        setTimeout(function(){
            this.log('after 1000ms');
        }.bind(this),1000);
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext()*/

//Solução 2
/*var obj = {
    showContext: function showContext() {
        var _that = this

        //this referencia o proprio objeto
        this.log('teste');
        //funcao de timeout com contexto especificado
        setTimeout(function(){
            _that.log('after 1000ms');
        },1000);
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext()*/

//Solução 3
/*var obj = {
    showContext: function showContext() {
        //this referencia o proprio objeto
        this.log('teste');
        //funcao de timeout com contexto especificado
        setTimeout(()=>{
            this.log('after 1000ms');
        },1000);
    },
    log: function log(value){
        console.log(value);
    }
}

obj.showContext()*/