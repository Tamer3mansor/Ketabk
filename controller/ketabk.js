let { sendEmail } = require("../utiles/mail");
const asyncHandler = require("express-async-handler");
const user = require("../models/user");
const books = require("../models/books");
let signUp = asyncHandler(async (req, res) => {
  let { email, password, confirm } = req.body;
  let _user = await user.create({
    email,
    password,
  });
  if (_user) {
    sendEmail(email);
  }
  res.send(email, password, confirm);
});
module.exports = {
  signUp,
};
