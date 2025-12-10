/** Dados primitivos - Imutáveis
 *  string, number, boolean, undefined, null, (bigint, symbol)
 * Referência (mutável) - array, object, function
 * Passados por referência
 */
const a = [1, 2, 3];
const b = [...a]; // independente
const c = a; // cópia
a.push(4);
console.log(a, b, c);