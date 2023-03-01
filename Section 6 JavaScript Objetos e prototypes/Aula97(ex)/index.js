// Exercício - Validando um CPF (Algoritmo)

// 705.484.450-52  070.987.720-03

/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (327 % 11) = 5 (Primeiro dígito)
Se o número = digito for maior que 9, considermos 0.

7x  0x  5x 4x 8x 4x 4x 5x 0x 5x
11  10  9  8  7  6  5  4  3  2
77  0   45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número = digito for maior que 9, considermos 0.

705.484.450-52 === 705.484.450-52
*/

// Minha Resolução

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

let cpfPrimeiro = [...cpfArray];

let index2 = 10;
for (let index = 0; index <= 8; index++) {
    for (; index2 >= 2;) {
        cpfPrimeiro[index] = cpfPrimeiro[index] * index2;
        index2--;
        break;
    }
}

let primeiroDigito = 11 - ((cpfPrimeiro.reduce((ac, val) => ac + Number(val), 0)) % 11);
console.log(primeiroDigito);