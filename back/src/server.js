const app = require('./app');
const port = app.get('port');

app.listen(port, () => console.log(`Rodando na porta ${port}`));

// const express = require('express');
// const app = express();
// const PORT = 3005; 

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });