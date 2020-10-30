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

module.exports = { addEmployeeValidation, editEmployeeValidation };
