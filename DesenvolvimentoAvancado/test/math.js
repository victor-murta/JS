// Usando Mocha 

// sinon = mocar funções / checar se elas foram invocadas
class Math {
    sum(a, b, callback){
        setTimeout(() => {
            callback(a+b)
        }, 5)
    }

    multiply(a, b ){
        return a * b;
    }

    printSum(req, res, a, b){
        res.load('index', a + b);
    }

}

module.exports = Math;