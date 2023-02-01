// setInterval e setTimeout 21/12/22

function mostraHora() {
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 4000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000);

// function funcaDoInterval() {
//     console.log(mostraHora());
// }
// setInterval(funcaDoInterval, 1000);

