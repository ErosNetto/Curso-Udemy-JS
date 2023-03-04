// Métodos de instância e estáticos 04/03/23

function teste() {
    console.log('Este é meu teste');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static soma(x, y) {
        return x + y;
    }
}
const controle1 = new ControleRemoto('LG');

// Método de instância
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Método estático
console.log(ControleRemoto.soma(2, 8));