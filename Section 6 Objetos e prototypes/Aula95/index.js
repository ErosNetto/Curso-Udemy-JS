// Herança 28/02/23

// Produto => aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// função construtora de Camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//Linkando o prototype de Produto em camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(precentual) {
    this.preco = this.preco + (this.preco * (precentual / 100))
};

// função construtora de Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque' , {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 18.9, 'Plástico', 5);

console.log(produto);
console.log(camiseta);
console.log(caneca);