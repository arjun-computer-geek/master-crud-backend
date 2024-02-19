const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    maxlength: [30, "Your name cannot exced 30 character"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    maxlength: [30, "Your name cannot exced 30 character"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  gender: {
    type: String,
    required: [true, "Please enter gender"],
    enum: {
      values: ["male", "female", "other"],
      message: "Please select gender",
    },
  },
  designation: {
    type: String,
  },
  dob: {
    type: Date,
  },
  doj: {
    type: Date,
  },
  image: {
    type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
