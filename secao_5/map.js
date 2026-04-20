const numeros = [5, 50, 80, 1, 2, 3, 5, 9, 7, 11, 15, 22, 27];

// map(valor, indice, array)
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

const animais = [
    { nome: 'Macaco', idade: 4},
    { nome: 'Girafa', idade: 6},
    { nome: 'Elefante', idade: 12},
    { nome: 'Rinoceronte', idade: 7},
    { nome: 'Hipopótamo', idade: 2},
    { nome: 'Leão', idade: 5},
    { nome: 'Hiena', idade: 1}
];

const nomeAnimais = animais.map(valor => valor.nome);
console.log(nomeAnimais);

const idadeAnimais = animais.map(valor => ({idade: valor.idade}));
console.log(idadeAnimais);

const idAnimais = animais.map((valor, indice) => ({id: indice, nome: valor.nome, idade: valor.idade}));
console.log(idAnimais);