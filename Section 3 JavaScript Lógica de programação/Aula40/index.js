// if, else if e else (1) 13/12/22

/*
    IF pode ser usado sozinho
    Sempre que utilizo a palavra else, precisa de um IF antes
    Eu posso ter vários ELSE IFs na checagem
    Só posso ter um ELSE na checagem
    Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE
*/

const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}

if (hora <= 11) {
    console.log('Bom dia');
} else if (hora <= 17) {
    console.log('Boa tarde');
} else if (hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}