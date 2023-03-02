// Funções construtoras (constructor functions) 21/02/23

// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterni = function() {

    };

    // Atributos ou métodos públicos
    // Pessoa.nome = nome;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Eros', 'Netto');
const p2 = new Pessoa('Maria', 'Silva');
p1.metodo();