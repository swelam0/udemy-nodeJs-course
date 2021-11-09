const express = require("express");
const app = express();

const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send("<h1>hello world!");
});

app.get("/api", (req, res) => {
  res.send("<h1>API</h1>");
});

app.get("/json", (req, res) => {
  res.json({name:'swelam'})
});

app.listen(port);
