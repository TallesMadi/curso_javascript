function retornaFunc(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFunc('Talles');
console.dir(funcao);