// Importa a função Router do Express, que permite criar rotas modulares e separadas para a aplicação
const { Router } = require('express');
const { storeUser } = require('../controller/cadastroController');
const router = Router();



/**
 * @swagger
 * /post/cadastro:
 *  post:
 *    summary: Cadastra uma nova tarefa
 *    responses:
 *      201:
 *        description: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
*/
router.post('/store/user', storeUser);

module.exports = router;