const nomeInteiro = 'Talles Madi';
const idade = 21;
const pesoKg = 93;
const alturaMetros = 1.90;
const anoNascimento = 2025 - idade;
let imc = pesoKg / alturaMetros ** 2;
console.log(`${nomeInteiro} tem ${idade} anos, pesa ${pesoKg}kg e tem ${alturaMetros} metros de altura e seu IMC é de ${imc}. ${nomeInteiro} nasceu em ${anoNascimento}.`);