const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connectToDatabase = require("./services/database");
const leagueRouter = require("./routes/leagueRoutes");

connectToDatabase();
app.use(cors());
app.use(express.json());

app.use("/league", leagueRouter);
app.use((req, res) => {
  res.status(404).json({ error: "Puslapis nerastas" });
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
