// module.exports = function(x, y) {
//     return x * y;
// };

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`);
    }
}