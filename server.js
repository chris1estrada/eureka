const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

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

const accountRoutes = require("./routes/accounts");
app.use('/api/v1/accounts', accountRoutes)

const businessRoutes = require("./routes/businesses");
app.use('/api/v1/businesses', businessRoutes);

const loginRoute = require("./routes/login");
app.use('/login', loginRoute)

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("connected")
});
