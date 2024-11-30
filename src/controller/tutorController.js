// Importa o módulo de conexão com o banco de dados configurado
const connection = require('../config/db');

// Define o controlador para a funcionalidade "tutor-logado"
// Esse controlador será responsável por retornar os dados do último usuário inserido no banco de dados
const tutorController = (req, res) => {
    // Consulta SQL para buscar o último usuário inserido na tabela "usuarios"
    const query = 'SELECT * FROM usuarios ORDER BY id DESC LIMIT 1';
    // Executa a consulta no banco de dados
    connection.query(query, (err, results) => {
        // Verifica se houve erro na execução da consulta
        if (err) {
            console.error('Erro ao buscar os dados:', err); // Loga o erro no console
            // Retorna uma resposta com status 500 (erro interno do servidor) e uma mensagem de erro em JSON
            return res.status(500).json({ error: 'Erro ao buscar os dados.' });
        }

        // Verifica se a consulta retornou algum resultado
        if (results.length === 0) {
            // Retorna uma resposta com status 404 (não encontrado) e uma mensagem de erro
            return res.status(404).json({ error: 'Nenhum usuário encontrado.' });
        }

        // Pega o primeiro registro retornado pela consulta (o último usuário inserido)
        const usuario = results[0]; // Pega o primeiro registro
         // Retorna os dados do usuário com status 200 (sucesso) no formato JSON
        res.status(200).json(usuario);
    });
};
// Exporta o controlador para que ele possa ser usado em rotas ou outras partes da aplicação
module.exports = tutorController;
