// Herança com classes 04/03/23

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

// Herança so com Extends
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Super() = superClass ou classe PAI

        this.cor = cor; // Mais coisas
        this.modelo = modelo; // Mais coisas
    }
}

// Outra Herança com Extends
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome); // Super() = superClass ou classe PAI
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }

    falarOi() {
        console.log('Oi');
    }
}



const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
t1.ligar();
t1.falarOi();
// console.log(t1.ligado);
