// For - Clássico - Estrutura de repetição 16/12/22

// i = index
// for (let i = 0; i <= 5; i++) { // Normal
//     console.log(`Linha ${i}`);
// }

// for (let i = 400; i <= 500; i++) { // De 400 até 500
//     console.log(`Linha ${i}`);
// }

// for (let i = 400; i <= 500; i += 10) { // Pulando de 10 em 10
//     console.log(`Linha ${i}`);
// }

// for (let i = -100; i <= 200; i += 10) { // Começando do negativo ou (let i = 500; i >= 400; i -= 10)
//     console.log(`Linha ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar';
//     console.log(i, par);
// }

const frutas = ['Maça', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
   console.log(`Índice ${i}`, frutas[i]);
}