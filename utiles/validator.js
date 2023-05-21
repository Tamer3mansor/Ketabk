const { body, check, validationResult } = require("express-validator");
const message = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const checkEmail = [
  body("email")
    .isEmail()
    .withMessage("Invalid email")
    .isEmpty()
    .withMessage("email required"),
  message,
];
const checkPassword = [
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 6 })
    .withMessage("Too short password"),
  message,
];
module.exports = { checkEmail, checkPassword };
