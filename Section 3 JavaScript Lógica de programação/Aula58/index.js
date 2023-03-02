// While e Do While - Estrutura de repetição 19/12/22

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;
// let rand = random(min, max);

while (rand !== 10) {
    // rand = random(min, max);
    console.log(rand);
}

console.log(' $ ');

do {
    // rand = random(min, max);
    console.log(rand);
} while(rand !== 10);


// const nome = 'Luiz';
// let i = 0; // controle

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++;
// }