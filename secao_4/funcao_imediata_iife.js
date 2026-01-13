// IIFE -> immediately invoked function expression
const nome = 'Raquel';

(function(idade){
    const nome = 'Talles';
    console.log(`Nome: ${nome} - Idade: ${idade}`);
})(21);