// Importa a configuração de conexão com o banco de dados
const connection = require('../config/db')
// Exporta a função "adicionarDado", que será utilizada para adicionar dados na tabela "dados_diarios"
exports.adicionarDado = (req, res) => {
    // Obtém o campo "dados_diarios" enviado no corpo da requisição
    const dados_diarios = req.body.dados_diarios;
    // Verifica se o campo "dados_diarios" foi fornecido
    if (!dados_diarios) {
         // Retorna uma resposta com status 400 (Bad Request) e mensagem de erro
        return res.status(400).send({ error: 'O campo "dados_diarios" é obrigatório.' });
    }
    // Remove espaços em branco no início e no fim da string
    const dados_diarios_str = dados_diarios.trim();
    // Define a query SQL para inserir o dado na tabela "dados_diarios"
    const query = 'INSERT INTO dados_diarios(dados_diarios) VALUES (?)';
    // Executa a query no banco de dados, passando o dado formatado como parâmetro
    connection.query(query, [dados_diarios_str], (err, result) => {
         // Verifica se ocorreu algum erro durante a execução da query
        if (err) {
            console.error(err);  // Exibe o erro no console para depuração
             // Retorna uma resposta com status 500 (Erro Interno do Servidor) e mensagem de erro
            return res.status(500).send({ error: 'Erro ao adicionar o dado.' });
        }
        // Retorna uma resposta de sucesso com status 201 (Criado)
        res.status(201).send({ message: 'Dado adicionado com sucesso!', id: result.insertId, dados_diarios });
    });
    // Mensagem de confirmação
    // Mensagem de confirmação
    // Dado que foi salvo
};

