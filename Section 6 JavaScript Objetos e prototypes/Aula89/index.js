// Revisando Objetos 26/02/23

const pessoa2 = new Object();
pessoa2.nome = 'Eros';
pessoa2.sobrenome = 'Netto';
pessoa2.idade = 19;
pessoa2.falarNome = function() {
  return (`${this.nome} está falando seu nome.`);
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
/*
for (let chave in pessoa2) {
    console.log(pessoa2[chave]);
}*/

// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Eros', 'Netto');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Trava o Objeto
}


const p2 = new Pessoa('Eros', 'Netto');
Object.freeze(p2); // Trava o Objeto
console.log(p2);