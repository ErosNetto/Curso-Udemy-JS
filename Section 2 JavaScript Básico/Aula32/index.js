// Objetos básico 10/12/22

// [] Colchetes = Array
// {} Chaves = Objeto

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('Cleiton', 'Chimendes', 43);
// const pessoa4 = criaPessoa('Josias', 'Machado', 19);
// const pessoa5 = criaPessoa('Nelson', 'Mandela', 87);

// console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();