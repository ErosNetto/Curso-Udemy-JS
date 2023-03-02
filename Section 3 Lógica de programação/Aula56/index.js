// For of - Estrutura de repetição 18/12/22

// For clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (strings, array ou objetos)
// For of - Retorna o valor em si (interáveis, arrays ou strings)


//            0123...
// const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique']

for (let i = 0; i < nomes.length; i++) { // For Clássico
    console.log(nomes[i]);
}

console.log(' ');

for (let i in nomes) {    // Indice  For in
    console.log(nomes[i]);
}

console.log(' ');

for (let valor of nomes) { // Valor  For of
    console.log(valor);
}

console.log(' ');

nomes.forEach(function(valor, indice, array) { // For Each
    console.log(valor, indice, array);
});