let num = 11;

if (num % 2 === 0) {
    console.log(`${num} é par`);
} else {
    console.log(`${num} é ímpar`);
};

const hora = 12;
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');

} else if (hora >=12 && hora <= 17) {
    console.log('Boa tarde!');

} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');

} else {
    console.log('Insira um horario valido!');
}