
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


// 19, 68, 116, 103, 96, 84, 92
// 14, 47, 87 , 76 , 69, 57, 63

