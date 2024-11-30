// Importa o módulo Express, que fornece ferramentas para criar e gerenciar servidores e rotas
const express = require('express');
// Cria uma instância do roteador do Express para gerenciar rotas de forma modular
const router = express.Router();
// Importa a função 'listarDados' do controlador de dados adicionais (dadosaddController)
// Essa função contém a lógica para processar as requisições relacionadas à listagem de dados
const { listarDados } = require('../controller/dadosaddController'); // Certifique-se de que o caminho está correto

// Define uma rota GET para listar os dados
// Quando uma requisição GET é feita em "/listar", a função "listarDados" será chamada para retornar os dados
router.get('/listar', listarDados); // Corrigido para GET

// Exporta o roteador para que ele possa ser utilizado em outras partes da aplicação
// Por exemplo, no arquivo principal do servidor para ser registrado com um prefixo apropriado
module.exports = router;
