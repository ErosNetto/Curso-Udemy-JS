// Object.defineProperty() e Object.defineProperties() 26/02/23

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor
    writable: true, // Pode alterar o valor
    configurable: true // Configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode alterar o valor
            configurable: true // Configurável
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode alterar o valor
            configurable: true // Configurável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);