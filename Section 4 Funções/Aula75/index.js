// Funções fábrica (Factory Functions) 15/02/23

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'falando sobre NADA') { // Uma função dentro do Objeto(METODO), metodo assim fala: function(assunto) {}
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() { // Uma função dentro do Objeto(METODO), ou assim imc() {}
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Eros', 'Netto', 1.8, 72);
const p2 = criaPessoa('Eros', 'Netto', 1.4, 50);
const p3 = criaPessoa('Eros', 'Netto', 1.9, 89);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

p1.nomeCompleto = 'Cleiton Silva Pinto';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());