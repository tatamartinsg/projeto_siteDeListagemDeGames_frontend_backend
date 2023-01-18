const mysql = require('mysql')
const conexao = mysql.createConnection({
    "user": "root",
    "password": "password",
    "database": "project_games",
    "host": "localhost",
    "port": 3306
})

module.exports = conexao