const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


var uuid = require('uuid');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

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

const port = process.env.PORT || 5022;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/user', (req, res) => {
  const userID = req.query.id;
  const sql = 'SELECT FirstName, LastName, Email, Password, Address, DateJoined FROM Users WHERE UserID = ?';
  conn.query(sql, [userID], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('User not found');
      }
      else {
        res.json({firstName: result[0].FirstName, lastName: result[0].LastName, email: result[0].Email, address: result[0].Address, dateJoined: result[0].DateJoined, password: result[0].Password});
      }
    })
});

app.post('/userUpdate', (req, res) => {
  const userID = req.query.id;
  const sql = 'UPDATE Users SET FirstName = ?, LastName = ?, Email = ?, Password = ?, Address = ? WHERE UserID = ?';
  const {firstName, lastName, email, password, address} = req.body;
  conn.query(sql, [firstName, lastName, email, password, address, userID], (err) => {
    if(err) {
      throw err;
    }
    else {
      res.send('User updated');
    }
  })
});

// API Endpoints for Vendor Review Table

app.get('/review', (req, res) => {
  const vendor_id = req.query.id;
  const sql = 'SELECT * FROM vendors_review WHERE vendor_id = ?';
  conn.query(sql, [vendor_id], (err, result) => {
      if(err) { 
        throw err;
      }
      else if (result.length === 0) {
        res.status(404).send('vendor not found');
      }
      else {
        const reviews = result.map(item => ({
          rating: item.rating,
          heading: item.heading,
          description: item.description
        }));
        res.json(reviews);
      }
    });
});

app.post('/addReview', (req, res) => {
  console.log(req.body);
  const sql = 'INSERT INTO vendors_review (vendor_id, rating, heading, description) VALUES (?, ?, ?, ?)';
  const { vendor_id, rating, heading, description } = req.body;
  conn.query(sql, [vendor_id, rating, heading, description], (err) => {
    if(err) {
      throw err;
    }
    else {
      res.send('review added');
    }
  })
});

app.get('/vendors', (req, res) => {
  const sql = 'SELECT * FROM vendors';
  conn.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching vendors:", err);
      res.status(500).send("Error fetching vendors");
    } else {
      res.json(result);
    }
  });
});

app.get('/vendors/:id', (req, res) => {
  const vendorId = req.params.id;
  const sql = 'SELECT * FROM vendors WHERE vendor_id = ?';
  conn.query(sql, [vendorId], (err, result) => {
    if (err) {
      console.error("Error fetching vendor details:", err);
      res.status(500).send("Error fetching vendor details");
    } else {
      if (result.length === 0) {
        res.status(404).send("Vendor not found");
      } else {
        res.json(result[0]);
      }
    }
  });
});
app.get('/vendors/:id', (req, res) => {
  const vendorId = req.params.id;
  const sql = 'SELECT * FROM vendors WHERE vendor_id = ?';
  conn.query(sql, [vendorId], (err, result) => {
    if (err) {
      console.error("Error fetching vendor details:", err);
      res.status(500).send("Error fetching vendor details");
    } else {
      if (result.length === 0) {
        res.status(404).send("Vendor not found");
      } else {
        res.json(result[0]);
      }
    }
  });
});
app.get('/vendors/:id', (req, res) => {
  const vendorId = req.params.id;
  const sql = 'SELECT * FROM vendors WHERE vendor_id = ?';
  conn.query(sql, [vendorId], (err, result) => {
    if (err) {
      console.error("Error fetching vendor details:", err);
      res.status(500).send("Error fetching vendor details");
    } else {
      if (result.length === 0) {
        res.status(404).send("Vendor not found");
      } else {
        res.json(result[0]);
      }
    }
  });
});


// Function by Yara
// this function takes user input and checks if a user exists.
// If a user exists, an error occurs and user is prompted to log in.
// If a user does not exist, the user is added to the database and their account is created successfully.
app.post('/api/register', async (req, res) => {
  const { FirstName, LastName, Email, Password } = req.body;

  const UserID = uuid.v4(); 

  try {

    const checkIfUserExists = 'SELECT * FROM Users WHERE Email = ?';
    conn.query(checkIfUserExists, [Email], async(checkError, checkResult) => {
      if (checkError) {
        console.error('An error occurred when verifying that user does not exist:', checkError);
        return res.status(500).json({ error: 'An error occurred during registration.' });
      }

      if (checkResult.length > 0) {
        return res.status(409).json({ error: 'User with this email already exists. Please log in.' });
      }

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
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'An error occurred during registration.' });
  }
});


