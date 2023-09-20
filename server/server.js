const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'nalin@123',
    database: 'form_database',
});

// Define your API routes

// Create a route to handle form submissions
app.post('/feedback', (req, res) => {
    const formData = req.body;
    console.log(formData);
    pool.query('INSERT INTO form_data SET ?;', formData, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while saving the form data.' });
        } else {
            console.log('Form data saved successfully');
            res.status(200).json({ affectedRows: result.affectedRows });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
