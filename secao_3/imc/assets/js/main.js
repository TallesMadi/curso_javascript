const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // const peso = form.querySelector('#peso');
    // const altura = form.querySelector('#altura');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    };
    if (!altura) {
        setResultado('Peso Inválido', false);
        return;
    };
    const imc = peso / (altura ** 2);
    setResultado(imc.toFixed(2));
});
function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const saida = verifyImc(msg);
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = `${msg} - ${saida}`;
    resultado.appendChild(p);
};
function verifyImc (imc) {
    let mensagem = '';
    if (imc <= 19 && imc > 0) {
        mensagem = 'Abaixo do Peso';
    } else if (imc > 19 && imc <= 25.8) {
        mensagem = 'Peso Normal';
    } else if (imc > 25.9 && imc <= 27.3) {
        mensagem = 'Pouco Acima do Peso';
    } else if (imc > 27.4 && imc <= 32.3) {
        mensagem = 'Acima do Peso';
    } else if (imc > 32.3) {
        mensagem = 'Obesidade';
    } else {
        mensagem = 'Valores inválidos';
    }
    return mensagem;
};