// Exercício 14/12/22

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // e = event ou evento // Preve e tira a opção submit do formulario
    e.preventDefault(); // Tira a opção submit do formulario
    const inputpeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');

    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    if (!peso) { // verifica se o peso é valido
        addResultado('Peso Inválido', false);
        return;
    }

    if (!altura) { // verifica se a altura é valido
        addResultado('Altura Inválido', false);
        return;
    }

    const imc = CalculaImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu IMC é ${imc} ${nivelImc}.`;

    addResultado(mensagem, true);
});

function getNivelImc (imc) { // Niveis do IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function CalculaImc (peso, altura) { // Calcula o IMC
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function criaParagrafo () {
    const paragrafo = document.createElement('p'); // Cria um elemento (no caso <p> paragrafo)
    return paragrafo;
}

function addResultado (mensagem, isValid) { // escreve no HTMl o resultado
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const paragrafo = criaParagrafo();

    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('ruim');
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}

// Parte Eros
/*
function meuEscopo() {
    const form = document.querySelector('#form');
    const inputpeso = document.querySelector('#peso');
    const inputaltura = document.querySelector('#altura');
    
    const resultado = document.querySelector('.escritaR');

    function calcularIMC(evento) {
        evento.preventDefault();
        
        const peso = Number(inputpeso.value);
        const altura = Number(inputaltura.value);

        let imc = peso / (altura * altura);

        if (imc <= 18.5) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`;
        } else if (imc <= 24.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`;
        } else if (imc <= 29.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`;
        } else if (imc <= 34.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`;
        } else if (imc <= 39.9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`;
        } else {
            resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`;
        }
    }

    form.addEventListener('submit', calcularIMC);
}
meuEscopo();
*/