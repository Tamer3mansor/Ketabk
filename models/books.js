const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new Schema({
  name: String,
  author: String,
  description: String,
  buyLink: String,
  type: String,
});
module.exports = mongoose.model("books", bookSchema);
