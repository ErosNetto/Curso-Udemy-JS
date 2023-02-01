// Atribuição via desestruturação (Arrays) 16/12/22

// ... rest, ... spread

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros; // Atribuição via desestruturação
// console.log(um, tres, cinco);

// const [um, dois, tres] = numeros; // Atribuição via desestruturação
// console.log(um, dois, tres);

// const numeros = [
// //      0          1          2
// //   0  1  2    0  1  2    0  1  2
//     [1, 2, 3], [4, 5, 6], [7, 8, 9]
// ];
// console.log(numeros[1][2])

const numeros = [
//      0          1          2
//   0  1  2    0  1  2    0  1  2
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
const [, [,,seis]] = numeros; // Atribuição via desestruturação
console.log(seis);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);