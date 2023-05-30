let { sendEmail } = require("../utiles/mail");
let { handelErrors } = require("../utiles/globalError");
const user = require("../models/user");
const bcrypt = require("bcrypt");
const { createToken } = require("../utiles/createToken");
const logger = require("../logging/winstone");
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
        sendEmail(email);
        console.log("created");
        res.cookie("jwt", createToken(id), {
          httpOnly: true,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        res.locals.logged = true;
        res.status(200).json({ msg: "success" });
      }
    } catch (error) {
      response = handelErrors(error);
      logger.error("wrong signup");
      res.status(400).json(response);
    }
  } else {
    response = { msg: "not equal" };
    logger.error("Not equal");
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
      res.locals.logged = true;
      res.status(200).send({ msg: "success" });
    } else {
      logger.error("Incorrect password");
      res.status(400).json({ msg: "Incorrect password" });
    }
  } else {
    logger.error("incorrect email");
    res.status(400).json({ msg: "Incorrect email" });
  }
};
let logOut = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.locals.logged = false;
  res.redirect("/");
};
module.exports = {
  signUp,
  logIn,
  logOut,
};
