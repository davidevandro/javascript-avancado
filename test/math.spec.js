const assert = require('assert');
const Math = require('../src/math.js');

//chai
const expect = require('chai').expect;

//sinon
const sinon = require('sinon');

let value = 0;
describe('Math class', function() {
    //hooks - formas de executar código evitando repetição
    //before, after, aftereach
    beforeEach(function() {
        value = 0;
    });


    it('Sum two numbers', function(done) {
        const math = new Math();

        //muda tempo maximo de teste
        //this.timeout(3000); 

        //metodo valida se os dois valores passados sao iguais
        //assert.equal(math.sum(5,5), 10);

        //essa avaliacao de codigo assincrona vai passar
        //mesmo com resultado errado e depois vai disparar erro
        //math.sum(5,5,(value) => {
        //    assert.equal(value,10);
        //})

        value = 5;
        math.sum(value,5,value => {

            expect(value).to.equal(10);
            done();
            //assert
            //assert.equal(value,10);
            //garante que o teste vai aguardar o callback/promise
            
        });
    });

    //teste que ainda não existe, pendente
    it('Multiply two numbers', function() {
        const math = new Math();

        const obj = {
            name: 'David Martins'
        };

        expect(onj).to.have.property('name');

        //expect(math.multiply(value,5)).to.equal(0);
        //assert.equal(math.multiply(value,5),0);
    });

    it.only('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };

        //adicionar spy numa funcção já existente
        //sinon.spy(res,'load');

        //substituir metodos e colocar returns customizados
        //sinon.stub(res, 'load).returns('xpto')
        //retorna o metodo para o normal
        //res.restore()

        const math = new Math();
        math.printSum(req, res, 5,5);
        //verificar se foi invocada a funcao
        //expect(res.load.calledOnce).to.be.true;

        //verificar se o primeiro argumento é index
        //expect(res.load.args[0][0]).to.be.equal('index');

        //verificar se o segundo argumento é o resultado da soma
        expect(res.load.args[0][1]).to.be.equal(10);

    });

    //para focar na execução de apenas um teste é it.only
    //para pular um teste, it.skip
});