const express = require('express');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/userRouter');
const cadastroRouter = require('./routes/cadastroRouter')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//app.use('/api', userRouter);
app.use('/api', cadastroRouter);

module.exports = app; 