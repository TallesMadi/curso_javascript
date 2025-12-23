// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNum(num1, num2) {
    const vetor = [num1, num2];
    const maior = vetor[0] > vetor[1] ? vetor[0] : vetor[1];
    return maior;
};

console.log(maiorNum(100, 15));