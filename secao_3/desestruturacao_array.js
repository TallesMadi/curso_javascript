// ...rest, ...spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, ...resto] = numeros;

console.log(um, tres, resto);

const lista = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [one, two, three] = lista;
console.log(one, two, three);

const [,[,,seis]] = lista;
console.log(seis);
