CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS imagens_nasa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    url TEXT,
    descricao TEXT,
    data_publicacao DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS localizacoes_iss (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp TIMESTAMP,
    latitude DOUBLE,
    longitude DOUBLE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS experimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    descricao TEXT,
    modulo VARCHAR(100),
    data_inicio DATE,
    data_fim DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;