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
        return res.redirect("/adminPage");}

        next();
          } else {
      res.redirect("/signUp");
      next();
    }
  }
};
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "secret", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let _user = await user.findById(decodedToken.id);
        res.locals.user = _user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = { tokenVerification, checkUser };
