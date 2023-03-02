// Prototypes 27/02/23

// Construtora -> molde (classe)
/*
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Desta maneira, essa função é recriada a cada nova pessoa (fica uma aplicação muito mal otimizada)
};

// Intância
const p1 = new Pessoa('Eros', 'Netto') // <- Pessoa = Função construtora
const p2 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora.

console.log(p1);
console.log(p2);*/



//UTILIZANDO PROTOTYPE
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenhome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instãncia
const p1 = new Pessoa('Eros', 'Netto') // <- Pessoa = função construtora
const p2 = new Pessoa('Luiz', 'O.') // <- Pessoa = função construtora

console.log(p1);
console.log(p2);