// Importa a configuração de conexão com o banco de dados
const connection = require('../config/db.js');
// Importa a biblioteca dotenv para carregar variáveis de ambiente do arquivo .env
const dotenv = require('dotenv').config();
// Função assíncrona que será responsável por cadastrar um novo usuário
async function storeUser(req, res) {
    // Exibe no console os dados recebidos na requisição para depuração
    console.log("Dados recebidos no controlador:", req.body);
     // Extrai os campos necessários do corpo da requisição (req.body)
    const { nome, sobrenome, telefone, email, senha } = req.body;
      // Prepara os parâmetros para a query SQL
    const params = [nome, sobrenome, telefone, email, senha];
    // Define a query SQL para inserir um novo usuário na tabela 'usuarios'
    const query = 'INSERT INTO usuarios(nome, sobrenome, telefone, email, senha) VALUES (?, ?, ?, ?, ?)';
    // Executa a query no banco de dados utilizando a conexão
    connection.query(query, params, (err, results) => {
         // Verifica se ocorreu algum erro na execução da query
        if (err) {
             // Se houver erro, exibe o erro no console para depuração
            console.error("Erro ao inserir no banco:", err);
            // Retorna uma resposta com status 500 (Erro Interno do Servidor) e uma mensagem de erro
            return res.status(500).json({
                success: false,
                message: "Erro ao salvar os dados no banco de dados.",
                data: err, // Inclui os detalhes do erro na resposta
            });
        } else {
              // Se a inserção for bem-sucedida, exibe no console o resultado da operação
            console.log("Usuário inserido com sucesso:", results);
            // Retorna uma resposta com status 201 (Criado) indicando que o usuário foi cadastrado com sucesso
            res.status(201).json({
                success: true,
                message: "Usuário cadastrado com sucesso.",
                data: { insertId: results.insertId }, // Retorna o ID do novo usuário inserido no banco
            }); 
        }
    });
}
// Exporta a função storeUser para que ela possa ser usada em outras partes da aplicação
module.exports = {
    storeUser,
};