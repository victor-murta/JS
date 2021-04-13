
// Curring
/*
function soma(a){
    // a retorna uma função que recebe outro parâmetro
    return function(b){
        return a + b;
    }
}

const soma2 = soma(2);
// é o meu parâmetro já memorizado
//soma2 é o retorno da minha segunda função
console.log(soma2(5));
*/

// Hoisting = levantar ou suspender algo 
//Hoisting de variáveis

// function fn(){
//     function log(value){
//         console.log(value)
//     }
//     log('Hoisting da função')
// }

// fn();

//Imutabilidade , os dados da função nunca mudam


// const user = {
//     name: "Victor",
//     lastName: "Murta"
// };

// function getUserName(user){
//     return {
//         //adicionando o fullName no meu user
//         ...user,
//         fullName: `${user.name} ${user.lastName}`
//     }
// }

// const userName = getUserName(user);
// console.log(userName)


// const students = [
//     {
//         name: "Vitor",
//         grade: 7
//     },
//     {
//         name: "Murta",
//         grade: 9
//     }
// ];

// function getApprovedStudents(studentList){
//     return studentList.filter(student => student.grade >=7 )
// }

// console.log(`Alunos aprovados: `);
// console.log(getApprovedStudents(students));

// Tipos e variáveis
//var, let, const
// var frase = "Opa, bom";
// frase.replace('Opa', 'bom')
// console.log(frase)

//Spread
/*
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pes'];

console.log(musica)
*/

//Array
/*
const pessoas = ['Victor', 'Caio', 'João'];
const pessoas1 = Array.of(1,2,3,4);
const posicoes = 3;
const pessoas2 = Array(posicoes);


console.log(pessoas.push('Insere final'));
console.log(pessoas.pop()); //remove final
console.log(pessoas.unshift('Insere início'));
console.log(pessoas.shift()); //remove início

const total = pessoas.concat(pessoas1);

console.log(total);
console.log(total.slice(0,2));
console.log(total.slice(2));
console.log(total.slice(-1));
console.log(total.slice(-3));
console.log(total.splice(2)); //vai remover de 0 até a posição 2 do array
console.log(total.splice(0,2, 'Splice'));
console.log(total);
*/
//para nodelist
/*
const divsNode = document.querySelectorAll('div');
const divsJs = Array.from(divsNode);
*/

/*
const pessoas1 = Array.of(1,2,3,4);
pessoas1.forEach((value, index) => {
    console.log(`${index} - ${value}`);
})

//map retorna um novo array da sua lista
pessoas1.map((value, index) => `${index} - ${value}`)
*/

//flat;
/*
const pessoas = ['Victor', ['Caio', 'João']];
console.log(pessoas);
const novo = pessoas.flat();
console.log(novo);
*/
/*  entrie
const pessoas1 = [1,2,3,4];
const pInterator = pessoas1.entries();
console.log(pInterator.next());
console.log(pInterator.next());
*/
/* encontra o primeiro número da condição, retornando ele
const pessoas1 = [1,2,3,4];
console.log(pessoas1.find( value => value > 3));
*/
/* retorna o index ao invés do número
const pessoas1 = [1,2,3,4];
console.log(pessoas1.findIndex( value => value > 3));
*/

/*
const pessoas1 = [1,2,3,4];
console.log(pessoas1.filter( value => value >= 3));
console.log(pessoas1.includes(1));
console.log(pessoas1.some(value => value % 2 === 0));  //se ao mínimo um possui essa condição
*/

const pessoas = ['Victor', 'Caio', 'João'];
pessoas.shift
