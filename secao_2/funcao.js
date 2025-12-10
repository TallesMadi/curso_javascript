function saudacao(nome) {
    console.log(`Bom dia, ${nome}, tudo bem?`);
};

function saudacaoReturn(nome) {
    return `Bom dia, ${nome}, tudo bem?`;
};

saudacao('Talles');
const saudacaoFuncao = saudacaoReturn('Raquel');
console.log(saudacaoFuncao);

function soma(x = 0, y = 0){
    const resultado = x + y;
    return resultado; 
};

console.log(soma(5, 4));
console.log(soma());

// const raiz = function(n) {
//     return n ** 0.5;
// };

const raiz = n => n ** 0.5; // arrow function

console.log(raiz(9));