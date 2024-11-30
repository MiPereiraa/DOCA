// Importa o módulo Express, que fornece ferramentas para criar servidores e gerenciar rotas
const express = require('express');
// Cria uma instância do roteador do Express para organizar as rotas relacionadas ao cadastro de usuários
const router = express.Router();
// Importa o controlador responsável por processar a lógica do cadastro de usuários
const cadastroController = require('../controller/cadastroController');

// Define uma rota POST para processar o cadastro de usuário
router.post('/store/user', (req, res) => {
    // Extrai os campos necessários do corpo da requisição (nome, sobrenome, telefone, email, senha)
    const { nome, sobrenome, telefone, email, senha } = req.body;

    // Validação básica: Verifica se todos os campos obrigatórios foram preenchidos
    if (!nome || !sobrenome || !telefone || !email || !senha) {
        // Retorna um status 400 (Bad Request) e uma mensagem de erro em formato JSON
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

// Redireciona a lógica de processamento para a função 'storeUser' no cadastroController
    cadastroController.storeUser(req, res);
});
// Exporta o roteador para que ele possa ser usado em outras partes da aplicação
// Geralmente será registrado no servidor principal (app.js) para compor um conjunto maior de rotas
module.exports = router;