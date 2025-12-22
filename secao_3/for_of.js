const nome = 'Talles Madi';

for (let valor of nome) {
    console.log(valor);
};

const nomes = ['Talles', 'Raquel', 'Luna'];

for (let val of nomes) {
    console.log(val);
};

nomes.forEach(function(el) {
    console.log(el)
});

//  For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, array ou string)