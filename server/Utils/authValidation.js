const { body } = require("express-validator");

const exists = {
  checkFalsy: true,
  checkNull: true,
};

const registerValidation = [
  body("Name").exists(exists).withMessage("Do you have name?"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .exists(exists)
    .withMessage("Create a strong password. length > 6"),
];

const loginValidation = [
  body("email").isEmail().withMessage("Email is not valid"),
  body("password").exists(exists).withMessage("Please enter valid password"),
];

module.exports = { registerValidation, loginValidation };
