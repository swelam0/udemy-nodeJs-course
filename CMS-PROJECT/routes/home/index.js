const express = require("express");
const router = express.Router();

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
