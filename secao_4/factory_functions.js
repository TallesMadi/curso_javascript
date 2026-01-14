// Factory Function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            const valor = this.peso / (this.altura ** 2);
            return valor.toFixed(2);
        },
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p1 = criaPessoa('Talles', 'Madi', 1.90, 90);
p1.nomeCompleto = 'Raquel Manzato';
console.log(p1.fala('falando sobre Javascript!'));
console.log(p1.imc);
console.log(p1.nomeCompleto);
