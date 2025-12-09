// string, number, undefined, null, boolean, symbol
const texto = 'Texto'; // string
const numero = 10; // number
const numero2 = 10.50; // number
let indefinido; // undefined -> não aponta para nenhum local na memória
const nulo = null; // Nulo -> não aponta para nenhum local na memória
const boolean = false;
const boolean2 = true;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof boolean);
console.log(typeof boolean2);

const array = [1, 2];
const array2 = array;
console.log(array);
array2.push(3);
console.log(array2)