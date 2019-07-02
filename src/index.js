const express = require('express');
const mysql = require('mysql');
const pool = require('./database');

const app = express();

//Configuracion puerto de servidor de desarrollo
app.set('port', process.env.PORT || 3000);

//Metodo get para la DB
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users LIMIT 1', (err, resp) => {
        if (err) throw err;
        res.send(resp);
        console.log('====================================');
        console.log('connected and downloading resources from database m');
        console.log('====================================');
    });
});

//Displaying a single value from db
app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(app.get('port'), (req, res) => {
    const puerto = app.get('port');
    console.log('====================================');
    console.log('Servidor en puerto: ' + puerto);
    console.log('====================================');
});

