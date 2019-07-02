const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testing',
};

const pool = mysql.createPool(config);

module.exports = pool;