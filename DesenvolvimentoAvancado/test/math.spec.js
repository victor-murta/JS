
//describe - descrição do oque você está tesatando
//it  - comporatamento esperado da classe


const assert = require('assert');
const Math = require('../test/math.js');
const expect = require('chai').expect;

describe('Math class', function(){

    this.beforeEach(function() {
        value = 0;
    })

    it('Sum of two numbers', function(done){
        const math = new Math();
        this.timeout(3000);
        //equal - se dois valore são iguais
        // try{
        //     math.sum(5, 5, value => {
        //         assert.equal(value, 10);
        //         done();
        //     });
        // }
        // catch(err){
        //     console.log(err);
        // }

        const value = 5;
        math.sum(value, 5, value => {
            // assert.equal(value, 10);
            expect(value).to.equal(10);
            done();
        });
    });


    it('Multiply two numbers', function(){
        const math = new Math();

        const obj = {
            name: 'Victor Murta'
        }

        expect(obj).to.have.property('name')

    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };

        math.print(req, res, 5, 5);
        expect(res.load.calledOnce).to.be.true;

    })

});


//run code = npm run test