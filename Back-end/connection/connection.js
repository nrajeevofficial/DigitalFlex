const mongoose = require("mongoose");
const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/userInfo")
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = connection;
