CREATE DATABASE doca_db;
USE doca_db;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    peso VARCHAR(20),
    vacinas TEXT,
    consultas TEXT,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id) ON DELETE CASCADE
);


CREATE TABLE favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id) ON DELETE CASCADE
);


CREATE TABLE dados_diarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT,
    data DATE NOT NULL,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id) ON DELETE CASCADE
);


CREATE TABLE dados_mensais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mes VARCHAR(20) NOT NULL,
    idas_veterinario INT DEFAULT 0,
    idas_petshop INT DEFAULT 0,
    passeios INT DEFAULT 0,
    comportamento_estranho TEXT,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

SELECT * FROM usuarios;
