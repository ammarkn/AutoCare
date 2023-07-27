const express = require('express');
const cors = require('cors');

var uuid = require('uuid');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());

const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9635361',
  port: 3306,
  password: '7mKRztMdjg',
  database: 'sql9635361'
});

conn.connect(function(err) {
if (err) throw err;
  console.log('Database is connected successfully!');
});
module.exports = conn;

app.listen(5000, () => {
  console.log('Server running.');
});

app.get('/user', (req, res) => {
  const userID = req.query.id;
  const sql = 'SELECT FirstName, LastName, Email, Password, Address FROM Users WHERE UserID = ?';
  conn.query(sql, [userID], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('User not found');
      }
      else {
        res.json({firstName: result[0].FirstName, lastName: result[0].LastName, email: result[0].Email, address: result[0].Address, password: result[0].Password});
      }
    });
});


// Function by Yara
app.post('/api/register', async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;

  const UserID = uuid.v4(); 

  try {

    const hashedPass = await bcrypt.hash(Password, 10);

    const sql = 'INSERT INTO Users (UserID, FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?, ?)';
    
    conn.query(sql, [UserID, FirstName, LastName, Email, hashedPass], (err, result) => {
      
      if (err) {
        console.error('An error occurred when inserting user details:', err);
        res.status(500).json({ error: 'An error occurred during registration.' });
      } else {
        res.status(200).json({ message: 'Registration successful.' });
      }

    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }

});