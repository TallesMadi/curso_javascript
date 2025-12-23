// Escreva uma função que recebe um número e retorne o seguinte:
// Numero é divisivel por 3 = fizz
// número é divisivel por 5 = buzz
// número é divisivel por 3 e 5 = fizzbuzz;
// Número não é divisivel por 3 e 5 = retorna o própria número
// checar se o número é realmente um número
// Use a função com números de 0 a 100

function divisivel(numero) {
    const div3 = numero % 3 === 0;
    const div5 = numero % 5 === 0;
    if (div3 && div5) return 'FizzBuzz';
    if (div3 && !div5) return 'Fizz';
    if (!div3 && div5) return 'Buzz';
    return numero;
};

console.log(divisivel(15));