const express = require("express");
const Post = require("../../models/Post");
const router = express.Router();

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// show all posts
router.get("/", (req, res) => {
  Post.find({}).lean()
    .then((posts) => {
      res.render("admin/posts", {posts: posts});
    })
    .catch((err) => {
      console.log(err);
    });
});

// create single post
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
