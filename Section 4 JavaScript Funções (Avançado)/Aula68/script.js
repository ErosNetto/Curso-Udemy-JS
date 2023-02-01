// As várias maneiras de declarar funções em JavaScript 23/01/2023

// Declaração de Função (Function Hoisting)
function falaOi() {
    console.log('Oie');
}
falaOi();


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();
const souUmDado1 = function souUmafuncao() {
    console.log('Sou um dado.');
};
souUmDado();


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


// Dentro de um objeto
const obj = {
    falar1() {
        console.log('Estou falando 1 ...');
    },
    falar: function() {
        console.log('Estou falando 2 ...');
    }
};
obj.falar();
obj.falar1();