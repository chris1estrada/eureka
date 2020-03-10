const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

if (process.env.NODE_ENV !== "production") require('dotenv').config();

// Create express server instance
const app = express();
const port = process.env.PORT || 5000;

// Middleware for processing request body content
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (request, response) {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

/**Establish connection to mysql server */
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const accountRoutes = require("./routes/accounts");
const businessRoutes = require("./routes/businesses");

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("connected")
});

app.post("/api/v1/accounts/users", (req, res) => { accountRoutes.createUser(req, res, connection) });

app.post("/api/v1/accounts/businesses", (req, res) => { accountRoutes.createBusiness(req, res, conneciton) });

app.get("/api/v1/accounts/businesses/:business_id", (req, res) => { accountRoutes.getBusinessAccountInfo(req, res, connection) });

app.get("/api/v1/accounts/users/:user_id", (req, res) => { accountRoutes.getUserAccountInfo(req, res, connection) });

app.put("/api/v1/accounts/businesses/:business_id", (req, res) => { accountRoutes.updateBusinessAccountInfo(req, res, connection) });

app.put("/api/v1/accounts/users/:user_id", (req, res) => { accountRoutes.updateUserAccountInfo(req, res, connection) });

app.patch("/api/v1/accounts/users/:user_id", (req, res) => { accountRoutes.updatePassword(req, res, connection) });

app.get("/api/v1/accounts/recovery", (req, res) => { ccountRoutes.recoverPassword(req, res, connection) });

app.get("/api/v1/businesses", (req, res) => { businessRoutes.getAvailableBusinesses(req, res, connection) });

app.get("/api/v1/businesses/:business_id", (req, res) => { businessRoutes.getBusinessDetails(req, res, connection) });

app.get("/api/v1/accounts/:account_id", (req, res) => {

  connection.query('select * from businesses', (err, results, fields) => {
    if (err) {
      console.error("error connecting" + err.stack)
      return
    }
    res.status(200).send(results);
    connection.end();
  })
});