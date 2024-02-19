const express = require("express");
const app = express();
const employees = require("./routes/employeeRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDatabase = require("./config/connectDb");

//configration for dotenv
dotenv.config();

// middleware for handle json
app.use(express.json());
// middleware for x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Connecting to the database
connectDatabase();

// all routes
app.use("/api/v1", employees);

// listening request
app.listen(8080, () => {
  console.log("App is running ");
});
