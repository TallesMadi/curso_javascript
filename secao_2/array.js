const nomes = ['Talles', 'Raquel', 'Luna'];
nomes[0] = 'Madi';
console.log(nomes[0]);
nomes.push('Talles')
console.log(nomes);
console.log(nomes.length);
nomes.unshift('Talles');
console.log(nomes);
nomes.pop()
console.log(nomes);
nomes.shift();
console.log(nomes);
console.log(nomes instanceof Array);