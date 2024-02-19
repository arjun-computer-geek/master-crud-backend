const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/home", (req, res) => {
  res.send("/home.html");
});

app.listen(8080, () => {
  console.log("App is running ");
});
