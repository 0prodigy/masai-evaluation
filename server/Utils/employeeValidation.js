const { body, header } = require("express-validator");

const exists = {
  checkFalsy: true,
  checkNull: true,
};

const addEmployeeValidation = [
  body("name").exists(exists).withMessage("Employee name is missing"),
  body("department")
    .exists(exists)
    .withMessage("Employee department is missing"),
  body("joiningDate").exists(exists).withMessage("Joining date is missing"),
];

const editEmployeeValidation = [
  body("name").exists(exists).withMessage("Employee name is missing"),
  body("department")
    .exists(exists)
    .withMessage("Employee department is missing"),
  body("joiningDate").exists(exists).withMessage("Joining date is missing"),
];

const addPaymentValidation = [
  body("amount").exists(exists).withMessage("Oops! you forgot to add amount"),
  body("date").exists(exists).withMessage("Pick a date for record."),
];

module.exports = {
  addEmployeeValidation,
  editEmployeeValidation,
  addPaymentValidation,
};
