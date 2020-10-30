const express = require("express");
const cors = require("cors");
const dot = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const { authRouter } = require("./Routes/auth");

const app = express();

dot.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

mongoose.connect(
  process.env.DBURI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Database is connected");
    }
  }
);

app.use("/api/auth/", authRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
