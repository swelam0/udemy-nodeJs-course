const express = require("express");
const router = express.Router();

// make admin layout us default to this routes
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

// home index route
router.get("/", (req, res) => {
  res.render("home/index");
});

// about page route
router.get("/about", (req, res) => {
  res.render("home/about");
});

// login page route
router.get("/login", (req, res) => {
  res.render("home/login");
});

// register page route
router.get("/register", (req, res) => {
  res.render("home/register");
});

module.exports = router;
