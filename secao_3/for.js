for (let i = 0; i <= 10; i ++) {
    // if (i % 2 === 0) {
    //     console.log(`${i} é par`);
    // } else {
    //     console.log(`${i} é ímpar`);
    // };
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(`${i} é ${par}`);
};

const frutas = ['Uva', 'Morango', 'Laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};