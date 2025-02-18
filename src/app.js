const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

module.exports = app;
