function calcularSomaDoisNumeros(a, b) {
    const resultado = a + b;

    return resultado;
}

function calcularMediaDeDoisNumeros(a, b) {
    const resultadoSomaDeDoisNumeros = calcularSomaDoisNumeros (a, b);
    const resultadoMedia = resultadoSomaDeDoisNumeros / 2;

    return resultadoMedia;
}

module.exports = {
    calcularSomaDoisNumeros,
    calcularMediaDeDoisNumeros
};