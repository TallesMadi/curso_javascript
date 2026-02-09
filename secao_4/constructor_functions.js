// Função construtura -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 1243598672439805234;

    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log('Sou um método!')
    };
}

const p1 = new Pessoa('Talles', 'Madi');
console.log(p1);
