const nomeCompletoUser = prompt('Digite o seu nome completo: ');
// document.body.innerHTML = 'teste';
document.body.innerHTML += `<br>O seu nome é: ${nomeCompletoUser}.</br>`;
document.body.innerHTML += `<br>Seu nome tem ${nomeCompletoUser.length} letras.</br>`;
document.body.innerHTML += `<br>Primeira letra do seu nome: ${nomeCompletoUser[0]}.</br>`;
document.body.innerHTML += `<br>Última letra do seu nome: ${nomeCompletoUser[nomeCompletoUser.length - 1]}.</br>`;
document.body.innerHTML += `<br>Últimas 3 letras do seu nome: ${nomeCompletoUser.slice(-3, nomeCompletoUser.length)}.</br>`;
document.body.innerHTML += `<br>Palavras do seu nome: ${nomeCompletoUser.split(' ')}.</br>`;
document.body.innerHTML += `<br>Seu nome maiúsculo: ${nomeCompletoUser.toUpperCase()}.</br>`;
document.body.innerHTML += `<br>Seu nome minúsculo: ${nomeCompletoUser.toLowerCase()}.</br>`;

