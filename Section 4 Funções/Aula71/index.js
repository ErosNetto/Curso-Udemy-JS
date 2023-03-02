// Escopo léxico 30/01/23

const nome = 'Eros';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Netto';
    falaNome();
}
usaFalaNome();