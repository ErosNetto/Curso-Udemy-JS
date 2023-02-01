// 21/12/22
// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o própreio número
// Checar se o número é realmente um número = Retorna o própreio número
// Usar a função com números de 0 a 100

// 1)
// function eDivisivel(n1) {
//     if (typeof n1 !== 'number') {
//         return n1;
//     }
//     if (n1 % 3 === 0 && n1 % 5 === 0) {
//         return 'FizzBuzz';
//     }
//     if (n1 % 3 === 0) {
//         return 'Fizz';
//     }
//     if (n1 % 5 === 0) {
//         return 'Buzz';
//     }
//     return n1;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i, eDivisivel(i));
// }


// 2)
function eDivisivel2(n1) {
    if (typeof n1 !== 'number') return n1;
    if (n1 % 3 === 0 && n1 % 5 === 0) return 'FizzBuzz';
    if (n1 % 3 === 0) return 'Fizz';
    if (n1 % 5 === 0) return 'Buzz';
    return n1;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, eDivisivel2(i));
}