// Criando um gerador de CPFs válidos 10/03/23

import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css'; // CSS

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();

const btn = document.querySelector('.btn-gera');
btn.addEventListener('click', () => {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
});