// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");

// Get our API routes
const api = require("./routes/api");

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set our api routes
app.use("/api/locations", api);

// Get port from environment and store in Express.
const port = process.env.PORT || "3000";
// app.set("port", port);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// _Create HTTP server._
// const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
// server.listen(port, () => console.log(`API running on localhost:${port}`));
