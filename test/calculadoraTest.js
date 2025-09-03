const {calcularSomaDoisNumeros} = require('../src/calculadora');
const { expect } = require('chai');

describe('Teste da função de soma', () => {

    it('A função deve somar dois números positivos', function () {
        const resultado = calcularSomaDoisNumeros(10, 7);
        expect(resultado).to.equal(17);
    });

    it('A função deve somar dois números 1 positivo e 1 negativo', () => {
        const resultado = calcularSomaDoisNumeros(10, -7);
        expect(resultado).to.equal(3);
    });

     });