const pessoa1 = {
    nome: 'Talles',
    sobrenome: 'Madi',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade(){
        ++this.idade;
    }
};
function createPerson(nome, sobrenome, idade) {
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome,
        sobrenome,
        idade
    }
};

console.log(pessoa1);
console.log(createPerson('Raquel', 'Manzato', 23));
pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1);
