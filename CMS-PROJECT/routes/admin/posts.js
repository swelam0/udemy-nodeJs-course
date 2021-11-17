const express = require("express");
const Post = require("../../models/Post");
const router = express.Router();

// make default theme to this paths it admin theme
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// show all posts
router.get("/", (req, res) => {
  Post.find({})
    .lean()
    .then((posts) => {
      res.render("admin/posts", { posts: posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// create single post page
router.get("/create", (req, res) => {
  res.render("admin/posts/create");
});

// create single post action
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

// edit single post page
router.get("/edit/:id", (req, res) => {
  res.render("./admin/posts/edit");
});

module.exports = router;
