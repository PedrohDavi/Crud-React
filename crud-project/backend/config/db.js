const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'R&m0V$!#s7Np@'
});

conn.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados');
        return;
    }
    console.log('Conectado ao banco de dados');
});

module.exports = conn;