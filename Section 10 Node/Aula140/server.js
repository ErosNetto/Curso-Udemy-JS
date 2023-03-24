require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING /*, { useNewUrlParser: true, useUnifiedTopology: true }*/)
    .then(() => {                                /* Coloque se precisar    Coloque se precisar */
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewaresGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // Caminho absoluto

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho absoluto
app.set('view engine', 'ejs');

// Nossos próprios Middlewares
app.use(middlewaresGlobal);

app.use(routes);
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor em execução!');
        console.log('Acessar: http://localhost:3000');
    });
});
