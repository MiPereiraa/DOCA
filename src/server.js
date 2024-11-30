//Importa o módulo express, uma framework para criar aplicativos e API's web
const express = require('express');
//Importa o módulo cors para habilitar o cross-origin resource sharing
const cors = require('cors');
//Cria a instância do aplicativo express
const app = express();
//Importa a configuração de conexão com o banco de dados
const connection = require('./config/db')

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Habilitar o cors para todas origens
app.use(cors());

// Importa o roteador responsável pelas rotas de cadastro
const cadastroRouter = require('./routes/cadastroRouter');
//Adiciona as rotas de login ao aplicativo com prefixo "/api/post/cadastro"
app.use('/api', cadastroRouter);

//Importa o roteador responsável pelas rotas relacionadas aos dados
const dadosRouter = require('./routes/dadosRouter')
//Adiciona as rotas de dados com prefixo "/api/dadosadd"
app.use('/api', dadosRouter);

//Importa o roteador para as rotas do tutor logado
const loginRouter = require('./routes/loginRouter')
//Adiciona as rotas do tutor logado com o prefixo "api/post/login"
app.use('/api/post/login', loginRouter);

//Importa o roteador para as rotas do tutor logado
const dadosaddRouter = require('./routes/dadosaddRouter')
//Adiciona as rotas dos daos com o prefixo "api/dadosadd"
app.use('/api/dadosadd', dadosaddRouter); 

//Importa o roteador para as rotas do tutor logado
const tutorRouter = require('./routes/tutorRouter')
//Adiciona as rotas do tutor com o prefixo "api/tutor-logado"
app.use('/api/tutor-logado', tutorRouter);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
    //Habilita novamente a CORS
    const cors = require('cors')
    app.use(cors());
});

module.exports = { app }