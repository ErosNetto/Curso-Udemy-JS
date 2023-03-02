// 21/12/22
// Escreva uma função que recebe 2 números e retorne o maior deles 19/12/22

// 4)
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 3));

// 3)
// function max(x, y) {
//     // if (x > y) return x;
//     // return y;

//     return x > y ? x : y;
// }
// console.log(max(10, 5));

// 2)
// function meuEscopo() {
//     const n1 = 4;
//     const n2 = 8;
    
//     function numMax(n1, n2) {
//         if (n1 > n2) {
//             return `O maior número é: ${n1}`;
//         } else {
//             return `O maior número é: ${n2}`;
//         }
//     }
//     console.log(numMax(n1, n2));
// }
// meuEscopo();

// 1)
// function meuEscopo() {
//     const n1 = 4;
//     const n2 = 8;
    
//     function numMax() {
//         if (n1 > n2) {
//             console.log(`O maior número é: ${n1}`);
//         } else {
//             console.log(`O maior número é: ${n2}`);
//         }
//     }
//     numMax();
// }
// meuEscopo();