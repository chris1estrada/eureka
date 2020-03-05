const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

console.log(process.env.HOST);

if (process.env.NODE_ENV !== "production") require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
})

app.get("/", (req, res) => {
  res.status(200).send("connected")
})

app.get("/api/v1/accounts/:account_id", (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 33066,
    user: process.env.DB_USER,
    password: process.env.DB_PASS

  });

  connection.connect(function (err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    res.status(200).send('connected as id ' + connection.threadId);
  });
  connection.end();
});