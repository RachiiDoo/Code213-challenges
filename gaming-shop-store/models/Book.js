const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", BookSchema);
