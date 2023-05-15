const mongoose = require("mongoose");
const { schema } = mongoose;
const bookSchema = new schema({
  name: String,
  author: String,
  description: String,
  cover: string,
  type: string,
});
const books = mongoose.model("books", bookSchema);
module.exports = { books };
