const express = require('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sindhujamuppana03@', // Set your MySQL password
  database: 'myappdb',      // Set your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Registration route
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';

  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Registration failed' });
    } else {
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Login failed' });
    } else if (result.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
