const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a', (req, res) => {
  res.send('AAAAAÂ')
})

app.get('/a/b', (req, res) => {
  const mysql = require("mysql2");
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root_password',
  });
  connection.execute(
    'SHOW DATABASES;',
    [],
    function (err, results, fields) {
      res.send(results)

      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

})

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root_password',
});

app.get("/tailieuhoctap", function (req, res) {

  connection.execute(
    'SHOW DATABASES;',
    [],
    function (err, results, fields) {

      res.send(results)

      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
