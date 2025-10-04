import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Função genérica para tratar as consultas
async function handleQuery(res, query) {
  try {
    const [rows] = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error("Erro ao executar a consulta:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

app.get('/api/usuarios', (req, res) => {
  handleQuery(res, 'SELECT * FROM usuarios');
});

app.get('/api/imagens', (req, res) => {
  handleQuery(res, 'SELECT * FROM imagens_nasa');
});

app.get('/api/localizacoes', (req, res) => {
  handleQuery(res, 'SELECT * FROM localizacoes_iss');
});

app.get('/api/experimentos', (req, res) => {
  handleQuery(res, 'SELECT * FROM experimentos');
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});