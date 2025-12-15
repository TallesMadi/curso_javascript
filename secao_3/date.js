// const data = new Date(0); //timestamp unix ou epoca unix
// const data = new Date(2019, 3, 20, 15, 14, 27);
// const data = new Date('2025-02-12 20:30:35');
const data = new Date(); // milésimos de segundos

console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(Date.now());