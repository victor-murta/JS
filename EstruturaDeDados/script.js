/*
var nome = 'Victor Murta';
alert('Testando'+ nome);
*/
// var pais = 'Vai Brasil'
// console.log(pais)
// console.log(pais.replace('Brasil', 'Funcionou'))


/*
var lista = ['p1', 'p2', 'p3'];
lista.push('Entrada de dados');
// lista.pop();
lista.reverse();
lista.toString();
console.log(lista.join(' | '));
*/

/*
var frutas = 
    [
        {
            nome: "Abacaxi",
            preco: 19.30
        },
    
        {
            nome: "Arroz",
            preco: 2.20
        }
    ]

console.log(frutas[0].nome)
*/

// function verificaIdade(valor){
//     var data = new Date();
//     alert(data.getDate());
//     alert(data.getDay());
//     alert(data.getMonth() + 1);
//     for (var n = 0; n <= valor.length; n++){{
//         if (valor[n] >= 18){
//             console.log('Maior de idade');
//         }else{
//             console.log('Menor de idade');
//         }
//     }}
// }

// verificaIdade([18,19,4,20]);

function clicou(){
    document.getElementById('resultado').innerHTML = "Bem vindo ao meu site";
};

function redirecionar(){
    window.open("https://www.google.com.br");
    window.location.href = "https://www.google.com.br"; //muda a rota da página atual
}

function passarMouse(elemento){
    // document.getElementById('passar-mouse').innerHTML = 'Obrigado por passar o mouse aqui';
    // alert('EEEEEEEEEIIIIITTTAAA, passou o mouse aqui em!!')
    elemento.innerHTML = "Obrigado por passar o mouse";
}


function voltar(elemento){
    // document.getElementById('passar-mouse').innerHTML = 'Passe o mouse aqui';
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


