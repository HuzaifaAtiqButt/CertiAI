const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');
const path = require("path");
const sequelizee = require("./config");
const instructor = require("./routes/instructor");

const app = express();
const hostname = "127.0.0.1";
const port = 5000;

app.use(cors()); // Set up CORS middleware first
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/instructor', instructor);

// Define a catch-all route for 404 errors
app.get("*", function (req, res) {
  res.status(404).send("404 error: page not found");
});

sequelizee.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
