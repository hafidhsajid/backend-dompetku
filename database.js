const mysql = require('mysql');// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database,
    multipleStatements: true
});// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});module.exports = koneksi;
