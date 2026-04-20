const nomes = ['Talles', 'Raquel', 'Luna'];
// const nomes = new Array('Ai', 'Ui', 'Ei');
const novo = [...nomes];
nomes[2] = 'Troquei';
delete nomes[2];
const removido = novo.pop();
const removido2 = novo.shift();
nomes.push('Flor');
nomes.unshift('Jordan');
// const novo2 = nomes.slice(1, 3);
const novo2 = nomes.slice(0, -1);
console.log(nomes);
console.log(novo);
console.log(novo2);
console.log(removido);

const nome = 'Talles Madi Pinheiro Morette';
const nomesLista = nome.split(' ');
console.log(nomesLista);

const nomes2 = ['Talles', 'Madi', 'Pinheiro', 'Morette'];
const nomeLista = nomes2.join(' ');
console.log(nomeLista);