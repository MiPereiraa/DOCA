//Importa o módulo express, que fornece para criar servidores e gerenciar rotas
const express = require('express');
//Cria uma instância do roteador do express para gerenciar rotas de forma modular
const router = express.Router();
//Importa o controlador responável por lidar com as operações relacionadas ao tutor
const tutorController = require('../controller/tutorController'); // O caminho do controlador deve estar correti para evitar erros

// Define a rota GET para obter os dados do tutor logado
router.get('/', tutorController);
// Exporta o roteador para ser utilizado em outras partes da aplicação, como no arquivo do servidor 
module.exports = router;
