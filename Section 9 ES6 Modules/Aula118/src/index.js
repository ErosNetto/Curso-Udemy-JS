// ES6 Modules - Import/Export 10/03/23

// INPORTA

// Importa o padrao 'Default'
import qualquerNome, { nome, sobrenome, idade } from './modulo1';
console.log(qualquerNome(5, 5));
console.log(nome, sobrenome, idade);



// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);



// import { nome, sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1';
// const p1 = new OutraCoisa('Eros', 'Netto');
// console.log(p1)



// import { nome as nome2, sobrenome as seila, idade, soma } from './modulo1';
// const nome = 'Jorge';
// console.log(nome, nome2, seila, idade);

// console.log(nome, sobrenome, idade);
// console.log(soma(5, 5));