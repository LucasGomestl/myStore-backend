const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./index");

const url = config.db.connectionString;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
module.exports = mongoose.connect(url, options);
