// Método Splice 25/02/23

//               -5       -4       -3          -2        -1
//                0        1        2           3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// const removidos = nomes.splice(nomes.length, 0, 'Eros');

// unshift
nomes.splice(0, 0, 'Eros');

console.log(nomes);