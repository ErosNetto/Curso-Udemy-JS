// Break e Continue 19/12/22

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue - continua para a próxima interação
// Break - sai do laço

let i = 0;
do { // Do while
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        i++;
        break;
    }
    i++;
} while (i < numeros.length);

/*
let i = 0;
while (i < numeros.length) { // While
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        i++;
        break;
    }
    i++;
}

/*
for (let i = 0; i < numeros.length; i++) { // For clássico
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        break;
    }    
}

for (let i in numeros) { // For in
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        break;
    }    
}


for (let numero of numeros) { // For of

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo ...');
        break;
    }    
}
*/