
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

const pessoas = ['Victor', 'Caio', 'João'];


