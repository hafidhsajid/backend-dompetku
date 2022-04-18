const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./database');
const app = express();
const PORT = process.env.PORT || 5000;// set body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));// buat server nya
// app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.post('/api/history', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO history SET ?';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});
app.get('/api/history', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM history';

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));