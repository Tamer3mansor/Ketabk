let adminVerify = async () => {
  let token = req.cookies.jwt;
  if (!token) {
    res.redirect("/signUp");
  } else {
    let decode = jwt.verify(token, "secret");
    let _id = decode.id;
    let _user = await user.findById(_id);
    if (_user) {
      if (_user.email == "AdminSecret@gmail.com") {
        res.redirect("/adminPage");
      }
      next();
    } else {
      res.redirect("/signUp");
      next();
    }
  }
};
module.exports = {
  adminVerify,
};
