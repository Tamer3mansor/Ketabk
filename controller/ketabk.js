let { sendEmail } = require("../utiles/mail");
let { handelErrors } = require("../utiles/globalError");
const asyncHandler = require("express-async-handler");
const user = require("../models/user");
const books = require("../models/books");
const bcrypt = require("bcrypt");
const { createToken } = require("../utiles/createToken");
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
        let id = _user.id;
        // sendEmail(email);
        console.log("created");
        res.cookie("jwt", createToken(id), {
          httpOnly: true,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });
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

let logIn = async (req, res) => {
  let { email, password } = req.body;
  console.log(email, password);
  let _user = await user.findOne({ email });
  if (_user) {
    let find = await bcrypt.compare(password, _user.password);
    if (find) {
      let id = _user.id;
      res.cookie("jwt", createToken(id), {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });
      res.status(200).send({ msg: "success" });
    } else {
      res.status(400).json({ msg: "Incorrect password" });
    }
  } else {
    res.status(400).json({ msg: "Incorrect email" });
  }
};
module.exports = {
  signUp,
  logIn,
};
