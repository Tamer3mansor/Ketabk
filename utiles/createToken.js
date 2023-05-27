var jwt = require("jsonwebtoken");
const createToken = (id) => {
  var jwt = require("jsonwebtoken");
  var token = jwt.sign({ id }, "secret", {
    expiresIn: 4 * 24 * 62 * 62,
  });
  return token;
};

const verifyToken = () => {};
// return jwt.sign({id} , 'tamer secret' ,{expiresIn:4*24*60*60});
module.exports = { createToken };
