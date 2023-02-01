// For in - Estrutura de repetição 18/12/22

// For in -> Lê os índices (Array) ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) { // Mostra só as chaves
    console.log(chave, pessoa[chave]);
}

// const chave = 'nome';
// console.log(pessoa[chave]);
// console.log(pessoa['nome']);


// //                 0       1      2
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let index in frutas) {  // For in
//     console.log(frutas[index]);
// }

// for (let i = 0; i < frutas.length; i++) { // FOR classico
//     console.log(frutas[i]);
// }