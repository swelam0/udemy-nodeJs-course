const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4500;

// mongo db connection
mongoose
  .connect("mongodb://localhost:27017/cms")
  .then((db) => {
    console.log("MONGO Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", engine({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

// home site routers
const homeRouter = require("./routes/home/index");
app.use("/", homeRouter);

// admin dashboard routers
const adminRouter = require("./routes/admin/index");
app.use("/admin", adminRouter);

// admin posts routers
const postsRouter = require("./routes/admin/posts");
app.use("/admin/posts", postsRouter);

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
