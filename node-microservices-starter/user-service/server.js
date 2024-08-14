const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Rz76922',
    database: 'jira_v2',
});

db.connect(err => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
})

app.get('/users', (req, res) => {
    res.send("User Service Called");
});

app.listen(3000, () => {
    console.log("User service is running on port 3000");
});
