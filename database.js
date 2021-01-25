const mysql = require('mysql')
const keys = require('./keys')

const db = mysql.createConnection(keys.database);


module.exports = db;