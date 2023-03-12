// Módulos (2) 12/03/23

// Pra frente usa o . e / = ./Pasta/Arquivo.js  ||  ./Arquivo.js
// Pra trás usa .. e / = ../Pasta/Arquivo.js  ||  ../Arquivo.js

// const Cachorro = require('./z/mod2'); // Não precisa colocar a extenção do aquivo .js mas pode colocar / Agora se for aquivo não .js deve colocar
// const c1 = new Cachorro('Tampinha');
// c1.latir();

const Cachorro = require('./z/mod2.js'); // Não precisa colocar a extenção do aquivo .js mas pode colocar / Agora se for aquivo não .js deve colocar
const c1 = new Cachorro('Tampinha');
c1.latir();

// console.log(__filename); // Nome da arquivo atual
// console.log(__dirname); // Nome da pasta atual

// const path = require('path');
// console.log(__dirname);
// console.log(path.resolve(__dirname, '..', '..' , 'arquivos', 'imagens'));

