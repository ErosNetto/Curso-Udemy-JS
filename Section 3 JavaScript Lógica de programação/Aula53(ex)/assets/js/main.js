// Exercícios com for 18/12/22

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'} // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);

    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);

    // tagCriada.innerText = texto; // Só tem texto
    // tagCriada.innerHTML = texto;
    
    div.appendChild(tagCriada);
}

container.appendChild(div);