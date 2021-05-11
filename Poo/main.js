/*
function Pessoa(name ){
    this.name = name;

    return {
        name: 'Teste'
    };
}
const p = new Pessoa();
console.log(p.name);

*/
// Prototype
/*
function Animal(){}

Animal.prototype.qtdPatas = 0;
Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    this.qtdPatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('AU!! AAAAAAAUUUU!!!!!!');
}

const bixano = new Cachorro(false);
const pitBul = new Cachorro(true);
*/

//Classes
/*
class Animal{
    contructor(qtdPatas){
        this.qtdPatas = qtdPatas;
    }
}

class Cachorro extends Animal{
    contructor( morde){
        this.qtdPatas = 4;
        this.morde = morde;
    }

    latir(){
        console.log('AU!!  AAAAAUUUUUU!!!!!')
    }
}

const bixano = new Cachorro(false);
console.log(bixano);
*/

//Modificadores de acesso  (public / private)    !!! Somente na versão 12 do JS
/*
'use strict';

function Person{
    #name = '';
    constructor(firstName){
        this.#name = firstName;
    };

    setName = function(newName){
        this.#name = newName;
        console.log(`Nome alterado para: ${this.#name}`);
    };
}

const p = new Person('Victor');
p.getName();
p.setName('OOOOOPPPPAAA, bom?');
*/

//Encapsulamento
/*
function Person(initialName){
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function(){
            return name;
        },
        set: function(value){
            name = value;
        }
    });
}
*/

// Static
/*
class Person{
    static walk(){
        console.log('Walking...');
    }
}
Person.walk();
*/


