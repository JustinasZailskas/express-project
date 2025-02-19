const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

const connectToDatabase = async () => {
  const uri = `${mongoURI}`;
  try {
    await mongoose.connect(uri);
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida jungianties prie MongoDB");
    process.exit(1);
  }
};

module.exports = connectToDatabase;
