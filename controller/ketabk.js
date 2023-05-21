let { sendEmail } = require("../utiles/mail");
let { handelErrors } = require("../utiles/globalError");
const asyncHandler = require("express-async-handler");
const user = require("../models/user");
const books = require("../models/books");

let signUp = async (req, res) => {
  const { email, password, confirm } = req.body;
  let response;
  if (password == confirm) {
    try {
      let _user = await user.create({
        email,
        password,
      });
      if (_user) {
        // sendEmail(email);
        console.log("created");
        res.status(200).json({ msg: "success" });
      }
    } catch (error) {
      response = handelErrors(error);
      res.status(400).json(response);
    }
  } else {
    response = { msg: "not equal" };
    res.status(500).json(response);
  }
};

let logIn = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let _user = await user.find({ email });
  if (_user) {
    console.log("hi ");
  }
  res.send(email, password, confirm);
});
module.exports = {
  signUp,
  logIn,
};
