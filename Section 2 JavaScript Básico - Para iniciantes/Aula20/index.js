// Operadores aritméticos de atribuição e incrementação 6/12/22

/*
    Aritméticos 
    +
    -
    /
    *
    ** Potenciação
    % Resto da divisão

    Ordem prescedencia:
    ()
    **
    * / %
    + -

    Operadores de atribuição
    Incremento = ++
    Decremento = --

    NaN = Not a number
*/

let contador = 1;
contador++;
console.log(contador)

let contador2 = 1;
contador2--;
console.log(contador2)

let contador3 = 0;
contador3 += 2;
console.log(contador3)

let contador4 = 2;
contador4 *= 2;
console.log(contador4)

const num = parseInt(10); // Inteiro
const num2 = parseFloat(10.3); // decimais
const num3 = Number(10); // Os dois ele decide