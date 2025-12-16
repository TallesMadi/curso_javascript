const data = new Date();
let diaSemana = data.getDay();

function getDia(dia) {
    let diaSemanaTexto;
    switch (dia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;  
        }
    return diaSemanaTexto
}

function getMes(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2:
            mesTexto = 'Março';
            break;
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
            break;
        default:
            mesTexto = '';
            break;
    }
    return mesTexto;
}

const section = document.querySelector('.container');
const resultado = section.querySelector('.resultado');
const dia = getDia(diaSemana);
const diaMes = data.getDate();
const mes = data.getMonth();
const mesNome = getMes(mes);
const ano = data.getFullYear();
const horas = data.getHours();
const minutos = data.getMinutes();

resultado.innerHTML = `${dia}, ${diaMes} de ${mesNome} de ${ano} ${horas}:${minutos}`;
// resultado.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });