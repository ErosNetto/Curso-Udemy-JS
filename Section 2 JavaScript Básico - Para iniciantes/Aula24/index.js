// Mais sobre Strings 07/12/22

// let umaString1 = "Um \"texto\"";
// console.log(umaString1);

// //               01234567
// let umaString = "Um texto";
// // console.log(umaString[5]);
// console.log(umaString.charAt(8));


// console.log(umaString.concat(' em um lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

// console.log(umaString.indexOf('texto'));
// console.log(umaString.indexOf('o', 3));

// console.log(umaString.lastIndexOf('m', 3));

// console.log(umaString.match(/[a-z]/g));

// console.log(umaString.search(/x/));

// console.log(umaString.replace(/Um/, 'Outro'));

let teste = "O rato roeu a roupa do rei de roma.";

// console.log(teste.replace(/r/g, '#'));

console.log(teste.slice(2, 6));
console.log(teste.slice(32));
console.log(teste.slice(-5));
console.log(teste.slice(-5, -1));

console.log(teste.substring(teste.length - 5, teste.length - 1));

console.log(teste.split('r'));
console.log(teste.split('r', 2));

console.log(teste.toUpperCase());
console.log(teste.toLowerCase());