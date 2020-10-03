//EventEmmiter

const EventEmitter = require('events');


//Forma 1
/*
const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
})

emitter.emit('User logged', {user: 'David Martins'});
*/

//Forma 2
class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

//para consumir apenas uma vez, usar metodo once
users.on('User logged', data => {
    console.log(data)
});

users.userLogged({user: 'David Martins'});