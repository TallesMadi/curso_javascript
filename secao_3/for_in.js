const frutas = ["Pêra", "Uva", "Maçã"];

for (let i in frutas) {
    console.log(i);
}

const pessoa = {
    nome: 'Talles',
    sobrenome: 'Madi',
    idade: 21
};

for (let chaves in pessoa) {
    console.log(pessoa[chaves]);
}