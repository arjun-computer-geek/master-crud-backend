const mongoose = require("mongoose");

const connectDb = () => {
  const databseUrl = process.env.DB_URI;
  mongoose.connect(databseUrl).then(() => console.log("databse connected...."));
};
module.exports = connectDb;
