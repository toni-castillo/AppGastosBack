const mysql = require('mysql2'); // Importa el módulo mysql2 para conectar con la base de datos

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

global.db = pool;