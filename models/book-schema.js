// schema for store data in mongodb
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  aboutAuthor: {
    type: String,
    required: true,
  },
});
const authbook = new mongoose.model("book-collection", bookSchema);
module.exports = authbook;
