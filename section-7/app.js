const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

mongoose.connection
  .once("open", () => {
    console.log("mongoose connected");
  })
  .on("error", (err) => {
    console.log(err);
  });
