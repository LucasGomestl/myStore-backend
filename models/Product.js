const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {type: String, unique: true, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
  category: {type: String, required: true},
  discount: {type: Number, required: true},
  image: {type: String, required: true},
});
module.exports = mongoose.model("Product", ProductSchema);
