// Mais sobre numebers 07/12/22

// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0
// num1 += num2; // 1.1
// num1 += num2; // 1.2
// num1 += num2; // 1.3
// num1 += num2; // 1.0
// um1 += num2; // 1.5
// num1 += num2; // 1.6
// num1 += num2; // 1.7
// num1 += num2; // 1.8
// num1 += num2; // 1.9
// num1 += num2; // 2.0^

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0


// num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

// console.log (num1.toString() + num2);
// num1 = num1.toString(); converte number pra String
// console.log(typeof num1);

// console.log (num1.toString(2)); converte para binario
// console.log(num1.toFixed(2)); Arredonda o numero depois da virgula

// console.log(Number.isInteger(num1)); verifica se o numero é inteiro ou não

// let temp = num1 * '5';
// console.log(Number.isNaN(temp)); // verifica se a conta é valida (NaN)
// console.log(temp);