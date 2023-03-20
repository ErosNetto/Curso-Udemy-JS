// Express - req.params, req.query e req.body 20/03/23

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// URL                         /Parametro
// http://facebook.com/profiles/12345
// ?campanha=googleads &
// nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="qualquercoisa"><br>
            Outro campo: <input type="text" name="outrocampo">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/123
    console.log(req.params);
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    // Vem do corpo da da requisição
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
    console.log('Servidor em execução!');
    console.log('Acessar: http://localhost:3000');
});