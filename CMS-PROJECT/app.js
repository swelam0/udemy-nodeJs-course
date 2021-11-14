const express = require("express");

const app = express();
const port = process.env.PORT || 4500;

app.use("/", (req, res) => {
  res.send("home");
});

app.listen(port, ()=>{
  console.log(`listening on port : ${port}`);
});
