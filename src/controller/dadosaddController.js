// Importa a configuração de conexão com o banco de dados a partir do arquivo db.js
const connection = require('../config/db.js');

// Importa o pacote dotenv para carregar variáveis de ambiente a partir do arquivo .env
const dotenv = require('dotenv').config();

// Importa a função `response` do express (embora não seja necessário neste contexto, pois `res` já é fornecido pela função de rota)
const { response } = require('express');

// Função assíncrona para realizar o login de um usuário
async function login(req, res) {

    // Extrai o nome e a senha do corpo da requisição e os coloca em um array para serem utilizados na query SQL
    const params = Array(
        req.body.dados_do_dia //Informações do usuário
    );
     // Executa a query SQL com o parâmetro fornecido (informações do usuário)
     connection.query(query, params, (err, results) => {
        console.log(err, results); // Loga qualquer erro que possa ocorrer e os resultados da query

        // Verifica se algum resultado foi retornado (ou seja, se as informações existe no banco de dados)
        if(results.length > 0) {
            let informações_do_usuárioForms = req.body.informações_do_usuário; // Senha fornecida pelo usuário no formulário
        }
    });
};

// Exporta a função login para que ela possa ser usada em outras partes da aplicação
module.exports = {
    login
};