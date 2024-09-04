const express = require('express');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const app = express();
 
app.set('port', process.env.PORT || 3005);
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
 
module.exports = app;
 