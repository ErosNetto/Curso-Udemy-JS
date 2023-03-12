// Módulos (1) 11/03/23

/*const mod1 = require('./mod1');

const falaNome = require('./mod1').falaNome;

const mod1 = require('./mod1');
const falaNome = mod1.falaNome;

const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome)
console.log(falaNome());*/

const path = require('axios'); // Nesse caso não precisa usar caminho do arquivo pq o modulo é do Node ou node_modules
const { Pessoa } = require('./mod1'); // Precisa usar o caminho do arquivo só pros modulos que agente faz

const p1 = new Pessoa('Eros');
console.log(p1);