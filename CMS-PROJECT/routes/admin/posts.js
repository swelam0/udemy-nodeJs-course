const express = require("express");
const Post = require("../../models/Post");
const router = express.Router();

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  res.render("admin/posts");
});

router.get("/create", (req, res) => {
  res.render("admin/posts/create");
});

router.post("/create", (req, res) => {
  let allowComments = req.body.allowComments ? true : false;

  const newPost = new Post({
    title: req.body.title,
    status: req.body.status,
    allowComments: allowComments,
    body: req.body.body,
  });

  newPost
    .save()
    .then((post) => {
      res.redirect("/admin/posts");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
