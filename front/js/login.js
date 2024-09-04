const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota de Registro de Usuário
app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;

    // Verifica se o usuário já existe
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            return res.status(400).send('Usuário já registrado');
        }

        // Hashea a senha
        const hashedPassword = await bcrypt.hash(senha, 8);

        // Insere o novo usuário
        db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashedPassword], (err, result) => {
            if (err) throw err;
            res.status(201).send('Usuário registrado com sucesso');
        });
    });
});

// Rota de Login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // Verifica se o usuário existe
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(400).send('Email ou senha incorretos');
        }

        // Verifica a senha
        const user = results[0];
        const isMatch = await bcrypt.compare(senha, user.senha);

        if (!isMatch) {
            return res.status(400).send('Email ou senha incorretos');
        }

        // Cria o token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


// ________________________________________________________

async function login(event) {
    event.preventDefault();

    const email = document.getElementById("email")
    const senha = document.getElementById("senha")

    const data = { email, senha};
    console.log(data);

    const response = await fetch('http:/localhost:3000/api/post/login', {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.strongify(data) 
    });

    const results = await response.json

    if (results.success) {
        alert(results.message);
        localStorage.setItem('usuarioId', JSON.strongify(results.data.id))
            Id_user = localStorage.getItem('usuarioId');
            console.log(`Id do usuário é ${Id_user}`)
    } else {
        alert(results.message);
    }
    
}