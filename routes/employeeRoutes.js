const express = require("express");
const {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
} = require("../controller/employeeController");
const router = express.Router();

router.route("/employees").get(getAllEmployee).post(createEmployee);
router
  .route("/employees/:id")
  .get(getSingleEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
