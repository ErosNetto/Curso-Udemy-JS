// Atribuição via desestruturação (Objetos) 16/12/22

const pessoa = {
    nome: 'Luiz', // Caso não tenha
    sobrenome: 'Miranda',
    idade: 30,
    endereco: { // Objeto dentro do objeto
        rua: 'Av Brasil',
        numero: 320
    }
};
// const nome = pessoa.nome;

    // Caso não tenha Nome criado nome = 'conteudo'
    // É possivel mudar o nome da variavel inves de ( nome = ) faça nome: teste
// const { nome: teste, sobrenome, idade } =  pessoa; // Atribuição via desestruturação
// console.log(teste, sobrenome);

        // Objeto dentro do objeto
// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);

// const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
// console.log(r, numero, endereco);

const { nome, ...resto} = pessoa; // Para ver o resto ...(nome da variavel)
console.log(resto);