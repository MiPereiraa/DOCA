const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Rota para cadastro de usuário
router.post('/users', userController.createUser);

module.exports = router;



// const {Router} = require('express')
// const userRouter = Router();

// const { storeUser } = require('../controller/userController');


/**
 * @swagger
 * /store/use:
 *  get:
 *      summary: Retorna todas as tarefas
 *      responses:
 *        200:
 *          descripition: Uma lista de tarefas
 *          content:
 *              aplication/json:
 *                 schema:
 *                    type: array
 *                    items:
 *                       type: object
 */
//userRouter.post('/store/user', storeUser);

//module.exports = userRouter