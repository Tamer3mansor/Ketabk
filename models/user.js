const mongoose = require("mongoose");
const { schema } = mongoose;
const userSchema = new schema({
  name: String,
  password: String,
  image: string,
});
const user = mongoose.model("user", bookSchema);
module.exports = { user };
