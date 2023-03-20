exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="qualquercoisa"><br>
            Outro campo: <input type="text" name="outrocampo">
            <button>Enviar</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Rota de POST.')
};