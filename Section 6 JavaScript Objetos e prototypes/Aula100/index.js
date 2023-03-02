// Factory Functions + Prototypes 02/03/23

/*
// Factory Functions com Prototypes
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },
        comer() {
            console.log(`${this.nome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} está bebendo`)
        },

    }

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Eros' , 'Netto');
const p2 = criaPessoa('Luiz', 'Otavio')
console.log(p1);
console.log(p2);
*/


// Factory Functions com Prototypes
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);
// const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Eros', 'Netto');
const p2 = criaPessoa('Maria', 'Silva');
console.log(p1);
console.log(p2);