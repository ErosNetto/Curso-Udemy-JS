// Criando classes 03/03/23

// Classes é a mesma coisa que função construtora só que melhor

// Molde Com Classes
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}


// Molde com Função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}


// Instaciar 
const p1 = new Pessoa('Eros', 'Netto');
const p2 = new Pessoa2('Valter', 'Pinto');
console.log(p1);
console.log(p2);