// Importa a configuração de conexão com o banco de dados
const connection = require('../config/db');
// Função responsável por listar os dados da tabela "dados_diarios"
const listarDados = (req, res) => {
  // Define a query SQL para selecionar todos os dados da tabela "dados_diarios", ordenados pelo campo "id"
  const query = 'SELECT * FROM dados_diarios ORDER BY id'; // Ajuste conforme sua tabela e lógica
  // Executa a query no banco de dados
  connection.query(query, (err, results) => {
    // Verifica se ocorreu algum erro ao executar a query
    if (err) {
      // Se houver erro, exibe o erro no console para depuraçãoor('Erro ao buscar os dados:', err);
      console.err
       // Retorna uma resposta com status 500 (Erro Interno do Servidor) e uma mensagem de erro
      return res.status(500).json({ error: 'Erro ao buscar os dados.' });
    }

    // Caso não haja erro, envia os resultados da consulta como resposta no formato JSON
    res.status(200).json(results); // Status 200 indica sucesso, e 'results' contém os dados retornados pela query
  });
};
// Exporta a função listarDados para que possa ser utilizada em outras partes da aplicação
module.exports = { listarDados };