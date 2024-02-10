const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopProduct',
    password: '12345'
})

module.exports = pool;