// operadores aritméticos: +, -, /, *, ** e % (resto de divisão).
const a = 15;
const b = 10;
console.log(a % b);

/** Operadores de atribuição e incremento
 * Incremento = ++
 * Decremento = --
 */
let contador = 1;
contador++;
++contador;
console.log(contador++);
console.log(++contador);
contador--;
console.log(contador);
contador += 5;
console.log(contador);
contador *= 5;
console.log(contador);
contador -= 5;
console.log(contador);

// parseInt, parseFloat
const num1 = 1;
const num2 = parseInt('5');
console.log(typeof num2)