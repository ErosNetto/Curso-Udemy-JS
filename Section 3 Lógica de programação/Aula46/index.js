// Objeto Date 14/12/22

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDIa = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDIa); // 01/01/1970 Timestamp unix ou época unix

// const data = new Date(2022, 1, 10, 12, 32, 45); // Ano, Mes, Dia, Hora, Minutos, Segundos, Milesimos de Segundos

function zeroAEsquerda (num) { // caso o dia seja de 1 até 9 
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) { // Formata a data
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// const data = new Date('2022-02-10 20:15:59'); // 2022-02-10 20:20:59 || 2022-02-10T20:20:59.999

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês comça do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Segundos', data.getSeconds());
// console.log('Milesimos de Segundos', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 1- segunda, 2 - terça, 3 - quarta, 4 - quinta, 5 - sexta, 6 - Sábado

// console.log(data.toString());
// console.log(Date.now()); // Obtem o marco zero (desde de 1970) até hoje contados em Milesimos de Segundos