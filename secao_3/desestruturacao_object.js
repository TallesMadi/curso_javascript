const pessoa = {
    nome: 'Talles',
    sobrenome: 'Madi',
    idade: 21,
    endereco:{
        rua: 'Av Brasil',
        numero: 66
    }
};

const { nome, sobrenome, endereco: {rua, numero} } = pessoa;
console.log(nome, sobrenome);
console.log(rua, numero);