const express = require("express");
const cors = require("cors");
const dot = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

dot.config();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
