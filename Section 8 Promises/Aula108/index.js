// Promises 07/03/23

/*
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}

esperaAi('frase 1', rand(1, 3), function() {
    esperaAi('frase 2', rand(1, 3), function() {
        esperaAi('frase 3', rand(1, 3));
    });
});*/


// Promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // if (typeof msg !== 'string') reject('BAD VALUE');
        if (typeof msg !== 'string') reject(new Error('ERRO'));


        setTimeout(() => {
            resolve(msg);
        }, tempo);   
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela')
    })
    .catch(e => {
        console.log('ERRO:', e)
    });

console.log('Isso será exibido antes das promisse.')