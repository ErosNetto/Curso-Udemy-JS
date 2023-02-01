// 21/12/22
// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// 1)
function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    }
    return false;
}
console.log(ePaisagem(1080, 1920));

// 2)
const paisagem = (largura, altura) => largura > altura ? true : false;
console.log(paisagem(1920, 1080));

// 3)
function ePaisagem2(largura, altura) {
    // return largura > altura ? true : false;
    return largura > altura;
}
console.log(ePaisagem2(1920, 1080));

// 4)
const paisagem2 = (largura, altura) => largura > altura;
console.log(paisagem(1920, 1080));