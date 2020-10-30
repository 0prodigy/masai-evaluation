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
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.split(" ").join("-"));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/JPEG" ||
    file.mimetype === "image/PNG" ||
    file.mimetype === "image/JPG"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post(
  "/add",
  upload.single("image"),
  addEmployeeValidation,
  imgURl,
  authenicateToken,
  addEmployee
);

router.get("/all", authenicateToken, paginatedData(Employee), getAllEmployee);
router.get("/findById/:id", authenicateToken, findEmployee);
router.get("/findByName/:name", authenicateToken, findEmployeeByName);

module.exports.employeeRouter = router;
