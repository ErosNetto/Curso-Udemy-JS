// Express Router e Controllers 20/03/23

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor em execução!');
    console.log('Acessar: http://localhost:3000');
});