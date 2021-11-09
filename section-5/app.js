const express = require("express");
const app = express();

const port = process.env.PORT || 9999;

app.get("/", (req, res) => {
  res.send('<h1>home</h1>')
});

app.get("/post/:id", (req, res) => {
  res.send(`<h1>post id is : ${req.params.id}`);
});

app.listen(port);
