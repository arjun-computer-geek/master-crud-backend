const catchAsync = require("../middleware/catchAsync");
const Employee = require("../models/employeeModels");
const ErrorHandler = require("../utils/errorhandler");

exports.getAllEmployee = catchAsync(async (req, res, next) => {
  const employees = await Employee.find();

  res.status(200).json({
    success: true,
    employees,
  });
});

exports.createEmployee = catchAsync(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    designation,
    dob,
    doj,
    skills,
    description,
  } = req.body;

  const employee = await Employee.create({
    firstName,
    lastName,
    email,
    gender,
    designation,
    dob,
    doj,
    skills,
    description,
  });

  res.status(200).json({
    success: true,
    employee,
  });
});

exports.getSingleEmployee = catchAsync(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return nextnext(
      new ErrorHandler(`Employee Not Found with this ${req.params.id} `, 404)
    );
  }

  res.status(200).json({
    success: true,
    employee,
  });
});

exports.updateEmployee = catchAsync(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return nextnext(
      new ErrorHandler(`Employee Not Found with this ${req.params.id} `, 404)
    );
  }
  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    employee,
  });
});

exports.deleteEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {
    return next(
      new ErrorHandler(`Employee Not Found with this ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    message: "Employee Deleted",
  });
});
