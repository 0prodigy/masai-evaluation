const express = require("express");
const {
  registerEmployer,
  loginEmployer,
} = require("../Controllers/authController");
const {
  registerValidation,
  loginValidation,
} = require("../Utils/authValidation");
const router = express.Router();

router.post("/register", registerValidation, registerEmployer);
router.post("/login", loginValidation, loginEmployer);

module.exports.authRouter = router;
