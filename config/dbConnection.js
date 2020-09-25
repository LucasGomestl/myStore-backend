const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/my-store";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
module.exports = mongoose.connect(url, options);
