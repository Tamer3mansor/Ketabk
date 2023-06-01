const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookSchema = new Schema({
  name: {
    type: String,
    required: true["Enter name of book"],
  },
  author: String,
  description: String,
  buyLink: String,
  type: String,
  pdf: String,
});
module.exports = mongoose.model("books", bookSchema);
