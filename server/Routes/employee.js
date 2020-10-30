const express = require("express");
const {
  addEmployee,
  findEmployee,
  getAllEmployee,
  findEmployeeByName,
} = require("../Controllers/employeeController");
const authenicateToken = require("../Middleware/authenticateToken");
const { addEmployeeValidation } = require("../Utils/employeeValidation");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const imgURl = require("../Middleware/imgUrl");
const paginatedData = require("../Middleware/pagination");
const Employee = require("../Models/Employee");

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

router.get("/all", authenicateToken, paginatedData(Employee), getAllEmployee);
router.get("/findById/:id", authenicateToken, findEmployee);
router.get("/findByName/:name", authenicateToken, findEmployeeByName);

module.exports.employeeRouter = router;
