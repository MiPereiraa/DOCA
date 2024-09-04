const connection = require('../config/db.js');
const dotenv = require('dotenv').config();

async function storeUser(request, response) {

    console.log("Dados recebidos no servidor:", request.body); 
    const params = Array(
        request.body.nome,
        request.body.sobrenome,
        request.body.telefone,
        request.body.email,
        request.body.senha,
    );

    const query = 'INSERT INTO usuarios (nome, sobrenome, telefone, email, senha) VALUES (?, ?, ?, ?, ?)';

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro no banco de dados:", err);
            response
                .status(400)
                .json({
                    success: false,
                    message: "Erro ao cadastrar. Verifique os dados inseridos.",
                    data: err
                });
            return;
        }

        response
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            });
    });
}

module.exports = {
    storeUser
}