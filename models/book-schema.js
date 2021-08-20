// schema for store data in mongodb
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20 
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
    maxLength: 15
  },
  language: {
    type: String,
    required: true,
    maxLength: 10
  },
  aboutAuthor: {
    type: String,
    required: true,
    maxLength: 40
  },
});
const authbook = new mongoose.model("book-collection", bookSchema);
module.exports = authbook;
