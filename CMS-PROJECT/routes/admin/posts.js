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
  Post.findById(req.params.id)
    .then((post) => {
      res.render("./admin/posts/edit", post);
    })
    .catch((err) => {
      console.log(err);
    });
});

// edit single post action
router.put("/edit/:id", (req, res) => {
  let allowComments = req.body.allowComments ? true : false;
  Post.findById(req.params.id)
    .then((post) => {
      post.title = req.body.title;
      post.status = req.body.status;
      post.allowComments = allowComments;
      post.body = req.body.body;

      post.save().then((updatedPost) => {
        res.redirect("/admin/posts");
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete single post
router.delete("/delete/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      res.redirect('/admin/posts')
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
