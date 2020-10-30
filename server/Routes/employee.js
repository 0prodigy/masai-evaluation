const express = require("express");
const {
  addEmployee,
  findEmployee,
} = require("../Controllers/employeeController");
const authenicateToken = require("../Middleware/authenticateToken");
const { addEmployeeValidation } = require("../Utils/employeeValidation");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const imgURl = require("../Middleware/imgUrl");

const storage = multer.diskStorage({
  destination: function (req, file, db) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, db) {
    cb(null, file.originalname.split(" ").join("-"));
  },
});

const upload = multer({
  storage: storage,
});

router.post(
  "/add",
  addEmployeeValidation,
  upload.single("image"),
  imgURl,
  authenicateToken,
  addEmployee
);

router.get("/:id", authenicateToken, findEmployee);

module.exports.employeeRouter = router;
