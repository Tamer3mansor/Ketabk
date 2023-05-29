var jwt = require("jsonwebtoken");
const user = require("../models/user");

const verifyToken = (token) => {
  let decode = jwt.verify(token, "secret");
  return decode;
};
let tokenVerification = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (!token) {
    res.redirect("/signUp");
  } else {
    let _id = verifyToken(token).id;
    let _user = await user.findById(_id);
    if (_user) {
      if (_user.email == "AdminSecret@gmail.com" && req.path != "/adminPage") {
        res.redirect("/adminPage");
        next();
      }
      next();
    } else {
      res.redirect("/signUp");
      next();
    }
  }
};
module.exports = { tokenVerification };
