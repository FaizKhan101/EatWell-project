const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).render("404");
});

router.use((error, req, res, next) => {
  res.status(500).render("500");
});

module.exports = router;
