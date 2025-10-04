import mysql from 'mysql2/promise';

// Crie o pool de conexões com o seu banco de dados MySQL no XAMPP
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Usuário padrão do XAMPP
  password: '', // Senha padrão do XAMPP é vazia
  database: 'iss_legacy_db_25',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;