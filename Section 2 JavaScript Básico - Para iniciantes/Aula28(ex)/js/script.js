// Exercicios com Numbers e Math 09/12/22

const numero = Number(prompt('Digite um número:'));
const numeroTi = document.getElementById('numero-ti');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');

let raizN = numero ** 0.5;
let nanN = isNaN(numero);
let inteiroN = Number.isInteger(numero);
let redoBn = Math.floor(numero);
let redoCn = Math.ceil(numero);
let casasDn = numero.toFixed(2);

numeroTi.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${raizN}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${inteiroN}</p>`;
texto.innerHTML += `<p>É NaN: ${nanN}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${redoBn}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${redoCn}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${casasDn}</p>`;

texto2.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto2.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto2.innerHTML += `<p>É NaN: ${isNaN(numero)}</p>`;
texto2.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto2.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto2.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;