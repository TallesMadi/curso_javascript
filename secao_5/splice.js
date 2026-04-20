const nomes = ['Talles', 'Raquel', 'Luna', 'João', 'Maria'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// const removido = nomes.splice(-1, 1);
// const removido = nomes.splice(3, 2, 'Flor', 'Rosa');
// const removido = nomes.splice(0, 1);
const removido = nomes.splice(nomes.length, 0, 'Jorge');
console.log(nomes, removido);
console.log(Number.MAX_VALUE);