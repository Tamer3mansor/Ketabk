const { body, check, validationResult } = require("express-validator");
const message = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const checkEmail = [
body('email')
.isEmail().withMessage('Enter valid email')
.notEmpty().withMessage("mail required")
.isLength({ min: 3 }).withMessage("Too short name")
.isLength({ max: 35 }).withMessage("Max length is 35 char")
]
const checkPassword = [
    body('password')
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min:6})
    .withMessage('password minimum length is 6')]
    
module.exports={checkEmail,checkPassword}
