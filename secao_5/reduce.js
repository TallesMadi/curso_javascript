const numeros = [5, 50, 80, 1, 2, 3, 5, 9, 7, 11, 15, 22, 27];

// reduce(acumulador, valor, indice, array);
// const reduce = numeros.reduce(function(acumulador) {
    // return acumulador;
// }, 0)
const total = numeros.reduce( (acumulador, valor) => acumulador += valor);
console.log(total);

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

const animais = [
    { nome: 'Macaco', idade: 4},
    { nome: 'Girafa', idade: 6},
    { nome: 'Elefante', idade: 12},
    { nome: 'Rinoceronte', idade: 7},
    { nome: 'Hipopótamo', idade: 2},
    { nome: 'Leão', idade: 5},
    { nome: 'Hiena', idade: 1},
    { nome: 'Jabuti', idade: 100},
];

const maisVelho = animais.reduce(function(acumulador, valor) {
    if (acumulador.idade < valor.idade) {
        acumulador = valor;
    } 
    return acumulador;
});

console.log(maisVelho);