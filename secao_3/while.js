// let i = 0;
// while (i < 10) {
//     i++;
//     if (i < 10) {
//         console.log('Menor que 10: ', i);
//     } else {
//         console.log('Igual a 10: ', i)
//     }
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let aleatorio = random(min, max);

while (aleatorio !== 10) {
    aleatorio = random(min, max);
    console.log(aleatorio);
}

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);