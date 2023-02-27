// Prototypes 27/02/23

// Contrutora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenhome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenhome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenhome;
};

// instãncia
const pessoa1 = new Pessoa('Eros', 'N.') // <- Pessoa = função construtora
const pessoa2 = new Pessoa('Luiz', 'O.') // <- Pessoa = função construtora
const data = new Date() // <- Date = função construtora