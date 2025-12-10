let numero = prompt('Digite um número: ')
numero = Number(numero);

document.body.innerHTML += `<br><h1>Seu número é ${numero}</h1></br>`;
document.body.innerHTML += `<br>Raíz quadrada: ${Math.sqrt(numero)}</br>`;
document.body.innerHTML += `<br>${numero} é inteiro: ${Number.isInteger(numero)}</br>`;
document.body.innerHTML += `<br>É NaN: ${Number.isNaN(numero)}</br>`;
document.body.innerHTML += `<br>Arredondando para cima: ${Math.ceil(numero)}</br>`;
document.body.innerHTML += `<br>Arredondando para baixo: ${Math.floor(numero)}</br>`;
document.body.innerHTML += `<br>Com duas casas decimais: ${numero.toFixed(2)}</br>`;