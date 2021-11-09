const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 9999;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/post", (req, res) => {
  console.log(`user email ${req.body.email} and password is ${req.body.password}`);
});

app.listen(port);
