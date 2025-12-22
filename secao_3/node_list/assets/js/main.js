const paragrafo = document.querySelector('.paragrafos');

const paragrafos = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
    p.style.color = '#fafafa';
    p.style.backgroundColor = backgroundColorBody;
}

