//a chamada fetch ja retorna uma promise
/*fetch('/data.json').then(responseStream => {
    //console.log(responseStream);

    //stream tem processamento assincrono
    //entao ele retorna uma promise tambem
    responseStream.json().then(data =>{
        console.log(data);
    });
})*/

//de maneira mais legivel encadeado
//se houver um erro de rede, ele sera pego no catch
/*fetch('/dataXPTO.json') //usar data.json tambem
    .then(responseStream => {
        if (responseStream.status === 200){
            return responseStream.json();
        } else{
            throw new Error ('Request Error');
        }  
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ',err);
    })*/

    //ES7 - Aysnc Await


const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(12345);
    },1000);
});

//processamento assincrona sequencial
/*const simpleFunc = async() => {
    //throw new Error('Oh no!');
    const data = await asyncTimer();
    console.log(data)
    const dataJSON = await fetch('/data.json').then(resStream => 
        resStream.json()
    );
    return dataJSON;
};
*/

//processamento paralelo
const simpleFunc = async() => {
    //throw new Error('Oh no!');
    const data = await Promise.all([asyncTimer(), fetch('/data.json').then(resStream => 
        resStream.json()
                                                                        )])
    return data;
};

simpleFunc()
    .then(data=>{
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    });