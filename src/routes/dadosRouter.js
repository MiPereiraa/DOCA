// Importa o módulo Express, que fornece ferramentas para criar servidores e gerenciar rotas
const express = require('express');
//Cria uma instância do roteador do Express para gerenciar rotas relacionadas a "dados_diarios"
const router = express.Router();
//Importa o controlador responsável pela lógica de manipulação de "dados_diarios"
//O controlador contém as funções para adicionar e listar dados
const dadosController = require('../controller/dadosController');

//  Define uma rota POST para adicionar um dado à tabela "dados_diarios"
//Quando uma requisição POST é feita para "/dados/adicionar", a função "adicionarDado" do controlador será chamada
router.post('/dados/adicionar', dadosController.adicionarDado);

// Define uma rota GET para listar todos os dados da tabela "dados_diarios"
// Esta linha está comentada, portanto, a funcionalidade de listar dados não está ativa no momento
// router.get('/listar', dadosController.listarDados);

// Exporta o roteador para que ele possa ser usado em outras partes da aplicação
// Por exemplo, será registrado no arquivo principal do servidor para rotas com prefixo apropriado
module.exports = router;
