// Express - req.params, req.query e req.body 18/03/23

const express = require('express');
const app = express();

// http://facebook.com/profiles/12345?
// campanha=googleads &
// nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes', (req, res) => {
    console.log(req.params);
    res.send('oi');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.listen(3000, () => {
    console.log('Servidor em execução!');
    console.log('Acessar: http://localhost:3000');
});