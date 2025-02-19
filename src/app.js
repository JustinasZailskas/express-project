const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
};

run().catch((error) => console.log);

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
