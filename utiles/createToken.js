var jwt = require("jsonwebtoken");
const createToken = (id) => {
  var jwt = require("jsonwebtoken");
  var token = jwt.sign({ id }, "secret", {
    expiresIn: 4 * 24 * 62 * 62,
  });
  return token;
};

module.exports = { createToken };
