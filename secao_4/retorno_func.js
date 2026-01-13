function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá ');
console.log(olaMundo('Mundo'));

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const dezVezes = criaMultiplicador(10);
console.log(dezVezes(2));