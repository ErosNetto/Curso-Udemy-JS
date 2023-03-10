// EXPORTA

const nome = 'Eros';
const sobrenome = 'Netto';
const idade = 19;

function soma(x, y) {
    return x + y;
}

export { nome, sobrenome, idade, soma as default }


// Criando e exportando
// export const nome = 'Eros';
// export const sobrenome = 'Netto';
// export const idade = 19;
// const cpf = '123123123';

// // Exporta o padrao 'Default'
// export default function soma(x, y) {
//     return x + y;
// }

// export class Pessoa{
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }



// Exportando com nomes
// const nome = 'Eros';
// const sobrenome = 'Netto';
// const idade = 19;

// function soma(x, y) {
//     return x + y;
// }

// export { nome as nome2, sobrenome, idade, soma };