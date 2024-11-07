const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const cors = require('cors');
require('dotenv').config();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            descipition: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3001"}],
    },
    apis: [`${__dirname}/routes/*.js`],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json())
app.use(cors())


app.listen(port, () => console.log(`Rodando na porta ${port}`));

// 
// const app = express();
// const PORT = 3005; 

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });