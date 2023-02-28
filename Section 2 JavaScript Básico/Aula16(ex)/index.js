const nome = 'Eros';
const sobrenome = 'Netto';
const idade = 18;
const peso = 69;
const altura = 1.82;

let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc.toFixed(1)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);