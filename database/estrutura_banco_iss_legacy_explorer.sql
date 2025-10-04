CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

CREATE TABLE imagens_nasa (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    url TEXT,
    descricao TEXT,
    data_publicacao DATE
);

CREATE TABLE localizacoes_iss (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP,
    latitude FLOAT,
    longitude FLOAT
);

CREATE TABLE experimentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    descricao TEXT,
    modulo VARCHAR(100),
    data_inicio DATE,
    data_fim DATE
);