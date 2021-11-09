const express = require("express");
const app = express();

const port = process.env.PORT || 9999;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1>home</h1>
  </body>
  </html>
  `);
});

app.get("/post/:id", (req, res) => {
  res.send(`<h1>post id is : ${req.params.id}`);
});

app.listen(port);
