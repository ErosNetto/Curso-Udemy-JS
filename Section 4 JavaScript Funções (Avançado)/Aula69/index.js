// Parâmetros da função 23/01/2023

/*
function funcao() {
    console.log(arguments[4]);
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);


function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);


function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Eros', sobrenome: 'Netto', idade: 18 });

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Eros', sobrenome: 'Netto', idade: 18 };
funcao(obj);


function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao(['Eros', 'Netto', 18]);
*/


const conta = function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);