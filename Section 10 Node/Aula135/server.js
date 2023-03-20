// Express Router e Controllers 20/03/23

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // Caminho absoluto

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Servidor em execução!');
    console.log('Acessar: http://localhost:3000');
});