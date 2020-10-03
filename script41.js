//Callbacks
/*function doSomething(callback){
    setTimeout(function(){
        callback('First Data')
    },1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second Data')
    },1000);
}

//executar as duas funcoes sequencial
//PROBLEMA: CALLBACK HELL
function doAll(){
    try{
        doSomething(function (data){
            var processedData = data.split('');
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
                    try{    
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        },1000);
                    } catch(err){

                    }
                });
            } catch(err){

            }
        });
    } catch(err){

    }
}

doAll();*/

//SOLUCAO: PROMISES
//se der problema, lanca throw e retorna reject
const doSomethingPromise =() => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('First Data')
    },1500);
});

const doOtherThingPromise= () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second Data')
    },1000);
});

//doSomethingPromise
//    .then(data => console.log(data))
//    .catch(error => console.log(error));

/*doSomethingPromise()
    .then(data => {
        console.log(data); 
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));*/
//Se algo der errado com o primeiro, não executa o segundo


//promises em paralelo
Promise.all([doSomethingPromise(),doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(
    err => {
        console.log(err);
    }
);


//promises concorrentes (a que resolver primeiro será executada)
Promise.race([doSomethingPromise(),doOtherThingPromise()]).then(data => {
    console.log(data);
});

