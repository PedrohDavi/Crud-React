const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'R&m0V$!#s7Np@',
  database: 'brasfoot2'
};

let pool;

const testConnection = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Conexão obtida com sucesso");
    conn.release();
  } catch (err) {
    console.error("Erro ao obter conexão:", err);
  }
};

const createDbQuery = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(`CREATE DATABASE IF NOT EXISTS brasfoot2`);
    console.log("Database criado/acessado com sucesso");
  } catch (err) {
    console.error("Erro ao acessar/criar banco de dados:", err);
  } finally {
    if (conn) {
      try {
        conn.release();
      } catch (releaseError) {
        console.error("Erro ao liberar a conexão:", releaseError);
      }
    }
  }
};

const createTablesQuery = async () => {
  let conn;
  const createPlayerQuery = `
    CREATE TABLE IF NOT EXISTS players (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR (255) NOT NULL,
      age INT (2) NOT NULL,
      position VARCHAR (20) NOT NULL,
      strength INT (3) NOT NULL,
      team varchar (255),
      side char (1) NOT NULL
      CONSTRAINT check_side CHECK (side in ('D', 'E', 'A')), 
      star TINYINT NOT NULL DEFAULT 0
    )
  `

  try {
    const conn = await pool.getConnection();
    await conn.query(createPlayerQuery);
    console.log("Tabelas acessadas/criadas com sucesso");
} catch (err) {
    console.error("Erro ao criar as tabelas:", err);
}finally {
    if (conn) conn.release();
}
}

const initializeDatabase = async () => {
  pool = mysql.createPool({
    ...dbConfig,
    acquireTimeout: 20000,
  });

  await testConnection();
  await createDbQuery();
  await createTablesQuery();
};

const init = async () => {
  await initializeDatabase();
};

init().catch(err => console.error("Erro ao inicializar o banco de dados:", err));

module.exports = { pool };
