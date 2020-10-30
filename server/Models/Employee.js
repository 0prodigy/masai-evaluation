const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
  },
  payments: {
    type: Array,
  },
  addBy: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
