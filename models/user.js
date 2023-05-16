const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  Image: String,
});
// const user =
module.exports = mongoose.model("user", userSchema);
