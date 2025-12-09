// string é iteravel, indexavel
let string = "Lorem ipsum";
console.log(string[0]);
console.log(string.charAt(0));
console.log(string.concat(' dolor sit amet'))
console.log(string.indexOf('Lorem'));
console.log(string.lastIndexOf('i'));
console.log(string.match(/[A-Z]/g));
// console.log(string.match(/[A-Z]/));
console.log(string.search(/i/));
console.log(string.replace('Lorem', 'Mudado'));
console.log(string.replace(/m/, '#'));
console.log(string.replace(/m/g, '#'));
console.log(string.length);
console.log(string.slice(0, 5));
console.log(string.substring(string.length - 5));
console.log(string.split(' ', 2));
console.log(string.toLowerCase());
console.log(string.toUpperCase());