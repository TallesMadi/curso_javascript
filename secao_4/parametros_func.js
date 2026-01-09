function funcao () {
    let total = 0;
    for (argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao(1, 2, 3);

function funcao2(a, b = 0, c = 0) {
    console.log(a, b, c)
}

funcao2(1, 2);

function funcao3({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

funcao3({ nome: 'Talles', sobrenome: 'Madi', idade: 21 });

function conta(operador, acumulador, ...num) {
    for (let numero of num) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        else acumulador;
    }
    console.log(acumulador);
}

conta('-', 1, 2, 3, 4, 5);