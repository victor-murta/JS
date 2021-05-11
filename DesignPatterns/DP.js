// Soluções generalistas para a solução de um problema durante a produção de um software (!framework && !código pronto)
/*
Tipos:
    -criação
    -estruturais
    -comportamentais
*/

//const { throws } = require("node:assert");

//Factory : não usamos new ,nem constructor
/*
function Pessoa(customProprieties){
    return {
        name: 'Victor',
        lastName: 'Murta',
        ...customProprieties
    }
}
const p = Pessoa({name:'Custom name', age:19});
console.log(p);
*/

//Singleton : JQuery = você pode chamar mais de uma vez,maz retorna a mesma instância
/*
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Victor'});
const p2 = Pessoa.call({name: 'Murta'})
console.log(p, p2)
*/

//Decorator = uma função recebe outra função como parâmetro e extende seu comportamento sem altera-la
/*
let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
};

function sum(a, b){
    return a + b;
};

console.log(callIfAuthenticated(() => sum(1,2)));
loggedIn = true;
console.log(callIfAuthenticated(() => sum(1,2)));
*/

//observer = A instância (subscriber) possui uma coleção de objetos (observer) e quando alterados os notifica a mudança de estado 
/*
class Observable {
    constructor(){
        this.observables = [];
    }

    subscribe(fn){
        this.observables.push(fn);
    }
    notify(data){
        this.observables.forEach(fn => fn(data));
    }
    unsubscrible(fn){
        this.observables = this.observables.filter(obs => obs !== fn)
    };
}

const o = new Observable();
const log1 = data => console.log(`Subscrbe 1: ${data}`)
const log2 = data => console.log(`Subscrbe 2: ${data}`)
const log3 = data => console.log(`Subscrbe 3: ${data}`)

o.subscribe(log1);
o.subscribe(log2);
o.subscribe(log3);

o.notify('Notified 1');

o.unsubscrible(log3);

o.notify('Notified 2');
*/

// Module
let name = '';

function getName(){
    return name;
}

function setName(newName){
    name = newName;
}

module.exports = {
    getName,
    setName
};






