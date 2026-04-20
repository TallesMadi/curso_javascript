// Filter -> sempre retorna um array, com a mesma quantidade de elementos ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 9, 7, 11, 15, 22, 27];
// filter(valor, indice, array)
// const numerosFilter = numeros.filter(valor => valor > 10);
const numerosFilter = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
});
console.log(numerosFilter);

const animais = [
    { nome: 'Macaco', idade: 4},
    { nome: 'Girafa', idade: 6},
    { nome: 'Elefante', idade: 12},
    { nome: 'Rinoceronte', idade: 7},
    { nome: 'Hipopótamo', idade: 2},
    { nome: 'Leão', idade: 5},
    { nome: 'Hiena', idade: 1}
];

const animaisNomeGrande = animais.filter(valor => valor.nome.length > 5);
console.log(animaisNomeGrande);

const animaisVelhos = animais.filter(valor => valor.idade > 5);
console.log(animaisVelhos);

// const animaisTerminaA = animais.filter(valor => valor.nome[valor.nome.length - 1] == 'a');
const animaisTerminaA = animais.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(animaisTerminaA);