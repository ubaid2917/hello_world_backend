const mongoose = require("mongoose");
require('dotenv').config();

const mongoUrl=process.env.DB_URL;


mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error connecting to the database:", error);
});

db.once("open", () => {
  console.log("Connection successful");
});

module.exports = db;
