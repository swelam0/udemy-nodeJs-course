const express = require("express");
const router = express.Router();

// make admin layout us default to this routes
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// admin index route
router.get("/", (req, res) => {
  res.render("admin/index");
});

// admin dashboard route
router.get("/dashboard", (req, res) => {
  res.render("admin/dashboard");
});

module.exports = router;
