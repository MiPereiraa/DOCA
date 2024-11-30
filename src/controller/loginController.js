// Importa a configuração de conexão com o banco de dados
const connection = require('../config/db.js');

// Carrega variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();

// Função assíncrona para realizar o login de um usuário
async function login(req, res) {
    try {
        // Extrai os dados do corpo da requisição enviados pelo cliente
        const { email, senha } = req.body;

        // Validações básicas para garantir que os campos não estejam vazios
        if (!email || !senha) {
             // Retorna uma resposta com status 400 (Bad Request) e uma mensagem de erro
            return res.status(400).json({
                success: false,
                message: "Preencha todos os campos!",
            });
        }

        // Query SQL para buscar um registro com o email fornecido na tabela "usuarios"
        const query = "SELECT email, senha FROM usuarios WHERE email = ?";

         // Executa a query no banco de dados
        connection.query(query, [email], (err, results) => {
            // Trata possíveis erros durante a execução da consulta
            if (err) {
                console.error("Erro ao acessar o banco de dados:", err);
                // Retorna uma resposta com status 500 (Erro Interno do Servidor)
                return res.status(500).json({
                    success: false,
                    message: "Erro no servidor. Tente novamente mais tarde.",
                });
            }

            // Verifica se algum usuário foi encontrado com o email fornecido
            if (results.length === 0) {
                // Retorna uma resposta com status 404 (Não Encontrado)
                return res.status(404).json({
                    success: false,
                    message: "Usuário não encontrado!",
                });
            }

             // Obtém a senha do banco de dados para comparação
            const senhaDb = results[0].senha;
             // Compara a senha fornecida com a senha armazenada no banco
            if (senhaDb === senha) {
                console.log('Senha correta!'); // Loga no console que a senha está correta
                // Retorna uma resposta com status 200 (Sucesso)
                return res.status(200).json({
                    success: true,
                    message: "Login feito com sucesso!",
                });
            } else {
                // Caso a senha não corresponda, retorna uma resposta com status 401 (Não Autorizado)
                return res.status(401).json({
                    success: false,
                    message: "Senha incorreta!",
                });
            }
        });
    } catch (error) {
         // Captura erros inesperados na execução do código
        console.error("Erro inesperado:", error);
        // Retorna uma resposta com status 500 (Erro Interno do Servidor)
        return res.status(500).json({
            success: false,
            message: "Erro no servidor. Tente novamente mais tarde.",
        });
    }
}

// Exporta a função login para que ela possa ser usada em outras partes da aplicação
module.exports = {
    login,
};