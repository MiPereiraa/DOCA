//Impporta o módulo express, que fornece ferramentas para criar servidores e gerenciar rotas 
const express = require('express');
//Cria uma instância do roteador do express para organizar rotas relacionadas ao login
const router = express.Router();
//Importa a função 'login' do controlador de login
//A função será usada para processar as requisições à rota de login
const { login } = require('../controller/loginController'); // Importar a função 'login'

// Define uma rota POST na raiz do roteador para o login
//Quando uma rqeuisição POST é feota nessa rota, a função 'login' será executada
router.post('/', login);

//Exporta o roteador para que ele possa ser usado em outras partes da aplicação
//Por exemplo, será registradi no servidor principal para ser acessado como "/api/post/login"
module.exports = router;
