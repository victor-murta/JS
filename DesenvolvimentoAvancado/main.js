/*
//funções anônimas
var soma = function(a, b) {
    return a + b;
}
console.log(soma(2,4));

//arrow function 
var soma = (a,b) => {
    return a+ b;
}


var obj = {
    //'showContent' e 'log ' são métodos
    showContent: function showContent(){
        // console.log(this);
        // this.log('teste');
        setTimeout(function(){
            console.log(this)
        }.bind(this), 1000);
    },
    log: function log(value ){
        console.log(value);
    }
}

obj.showContent();
*/


// const { resolve } = require("node:path")

// default funciton args

// function randomNumber(){
//     return Math.round(Math.random() * 10);
// }

// function multiply(a, b = /*1*/ /*a*/ randomNumber()){
//     //caso b não seja passado
//     //b = b || 1;
//     // b = typeof b === undefined ? 1 : b;
//     // if ( typeof b === undefined){
//     //     b = 1;
//     // }
//     console.log(a * b);
// }

// // multiply(5);  // 0 é convertido para o false


// var obj = {
//     // sum : function sum(a, b){
//     //     console.log( a + b);
//     // }

//     sum(a, b){
//         console.log(a + b);
//     }

// };

// obj.sum(1, 5);

// rest e spread operators

// function sum(...args){
//     // return args.reduce((acc, value) => acc + value, 0);  0 == valor inicial; acc == valor acumulado; value == valor 

// }


// //rest operator 
// const sum = (a,b,...rest) => {
//     return rest;
// }


// //spread operator
// const str = 'Digital';
// function log(...args){
//     console.log(args);
// }

// console.log(sum(2,4,5,6,7));


// log(...str)


//Destructuring em reactjs

// var arr = ['Apple', 'Banana', 'Orange'];

// // var apple = arr[0];


// //criando variáveis para suas respectivas posições
// var [apple, banana, orange, [array]] = ['Apple', 'Banana', 'Orange', ['tomato']];

// // console.log(banana.indexOf(banana))
// console.log(array)


// Introdução a generators


// const uniqueId = Symbol('Testando'); //identificador 

// /*
// Symbol.iterator
// Symbol.split
// Symbol.toStringTag
// */

// const obj = {
//     values: [1,2,3,4],
//     [Symbol.iterator]() {
//         let i =0 ;

//         return {
//             next: () => {
//                 i++;
//                 return {
//                     value: this.values[i - 1],
//                     done: i > this.values.length
//                 }
//             }
//         }
//     }
// }

// const it = obj[Symbol.iterator]();

// // for (let value of obj){
// //     console.log(value);
// // }

// const arr2 = [...obj];
// console.log(arr2);


// Generators

// function* hello(){
//     console.log('Hello');
//     yield 1;

//     console.log('From');
//     const value = yield 2;

//     console.log(value);
// }

// const it = hello();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next('Outside'));


// function* naturalNumbers(){
//     let number = 0;
//     while(true){
//         yield number;
//         number++;
//     }
// }

// const it = naturalNumbers();

// console.log(it.next());
// console.log(it.next());


// Promisses e Fetch

//promise  = Pending(executando), fulfilled(terminou de executar), rejected

// const doSomethingPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('First data');
//     }, 1000);
// });

// doSomethingPromise.then(data => console.log(data));

// fetch('http://localhost:8080/data.json')
//     .then(responseStream => {
//         responseStream.json()
//     })
//     .catch(err => {
//         console.log('ERROR: ', err)
//     });


//promisses

// const asyncTimer = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Data');
//     }, 1000)
// })

// const simpleFuncion = async () => {
//     // throw new Error('Oh no');
//     const data = await asyncTimer();
//     return data;
// }

// // console.log(simpleFuncion());

// simpleFuncion()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//EventEmmiter (node)

// const EventEmmiter =require('events');


// class Users extends EventEmmiter{
//     userLogged(data){
//         this.emit('User logged', data);
//     }
// }

// const users = new Users();

// users.on('user logged', data => {
//     console.log(data);
// })

// users.userLogged({user: 'Victor Murta'});


//testes automatizados 

//Mocha, Chai, Sinon

//   Tratamenot de erros


// class CustomError extends Error{
//     constructor({message, data}){
//         super(message);
//         this.data = data
//     }
// }

// try{
//     const name = "Victor Murta";

//     const error = new CustomError({
//         message: 'Mensagem de erro Customizada',
//         data: {
//             type: 'Server error'
//         }
//     });
//     throw error;
// }catch(err){
//     console.log('EERRRRROOOOOUUUUU', err);
// }finally{
//     console.log('Vida que segue');
// }


// DEBUGGING

// console.group('My group');
// console.log('P1');
// console.log('P2');
// console.groupEnd('My group');


// console.time('Log time');
// setTimeout(() => {
//     console.timeEnd('Log time');
// }, 2000);

// console.table(['Victor Murta Garcia', 'Testando rapá'])

// console.assert(1 === 2, 'ops')

console.log('%c styled log', 'color:blue; font-size: 50px;');
