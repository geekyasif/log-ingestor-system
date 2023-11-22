const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
  } catch (error) {
    console.log(error);
  }
})();

const app = express();

app.use(express.json());
app.use("/api", routes);

module.exports = app;
