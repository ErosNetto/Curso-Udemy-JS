// Closures 30/01/23

// Global
function retornaFuncao() { // Mae
    const nome = 'Eros';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);