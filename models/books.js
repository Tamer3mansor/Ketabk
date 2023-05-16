const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new Schema({
  name: String,
  author: String,
  description: String,
  cover: String,
  type: String,
});
const books = mongoose.model("books", bookSchema);
module.exports = { books };
