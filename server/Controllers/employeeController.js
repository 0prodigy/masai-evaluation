const Employee = require("../Models/Employee");
const { validationResult } = require("express-validator");
const dotenv = require("dotenv");
const { v4 } = require("uuid");
dotenv.config();

const myValidation = validationResult.withDefaults({
  formatter: (err) => {
    return {
      err: true,
      message: err.msg,
    };
  },
});

const addEmployee = async (req, res) => {
  const errors = myValidation(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array()[0];
    return res.json({ err, message });
  } else {
    const employee = new Employee({
      id: v4(),
      ...req.body,
      addBy: req.authEmail,
      image: req.url,
    });
    try {
      await employee.save();
      res.json({
        err: false,
        message: "Employee added successfully",
        employee: employee,
      });
    } catch (err) {
      res.sendStatus(500).json({
        err: true,
        message: "Something Went wrong",
      });
    }
  }
};

const findEmployee = async (req, res) => {
  const id = req.params.id;

  try {
    const employee = await Employee.findOne({ id: id });
    res.json({ err: false, message: "Employee found", employee: employee });
  } catch (err) {
    res
      .sendStatus(404)
      .json({ err: true, message: "No employee exit with this id" });
  }
};

const getAllEmployee = async (req, res) => {
  try {
    res.json({ err: false, message: "Success", employees: res.result });
  } catch (err) {
    res.sendStatus(500).json({ err: true, message: "Something went wrong" });
  }
};

const findEmployeeByName = async (req, res) => {
  try {
    const allEmployee = await Employee.find();
    const result = allEmployee.filter(
      (employee) =>
        employee.name.toLowerCase().indexOf(req.params.name.toLowerCase()) != -1
    );
    res.json({ err: false, message: "Success", employee: result });
  } catch (err) {
    console.log(err);
    res.sendStatus(500).json({ err: true, message: "Something went wrong" });
  }
};

module.exports = {
  addEmployee,
  findEmployee,
  getAllEmployee,
  findEmployeeByName,
};
