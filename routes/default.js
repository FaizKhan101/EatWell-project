const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/confirm", (req, res, next) => {
  res.render("confirm");
});

module.exports = router;
