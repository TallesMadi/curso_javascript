// IEEE 754-2008
let num = 10;
let num2 = 2.5032984;

console.log(num.toString() + num2.toString());
console.log(typeof num);
console.log(num.toString(2));
console.log(num2.toFixed(2));
console.log(Number.isInteger(num2));
let num3 = 0.7 + 0.2;
console.log(num3);
console.log(Number.isInteger(num3));
num3 += 0.1;
num3 = parseFloat(num3.toFixed(2));
console.log(num3);
console.log(Number.isInteger(num3));