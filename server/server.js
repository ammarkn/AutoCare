const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(5001, () => {
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

// app.get('/vendors/${id}', (req, res) => {
//   const vendorId = req.params.id;
//   const sql = 'SELECT * FROM vendors WHERE vendor_id = ?';
//   conn.query(sql, [vendorId], (err, result) => {
//     if (err) {
//       console.error("Error fetching vendor details:", err);
//       res.status(500).send("Error fetching vendor details");
//     } else {
//       if (result.length === 0) {
//         res.status(404).send("Vendor not found");
//       } else {
//         res.json(result[0]);
//       }
//     }
//   });
// });
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
