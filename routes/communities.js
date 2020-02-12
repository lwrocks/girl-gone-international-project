const express = require("express");
const router = express.Router();
const Community = require("../models/Community");

router.get("/map", (req, res) => {
  Community.find()
    .then(communities => {
      res.render("map", { communities, user: req.user });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/communities", (req, res) => {
  Community.find()
    .then(communities => {
      res.json(communities);
    })
    .catch(err => {
      next(err);
    });
});

const loginCheck = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
}

router.get("/admin/add", loginCheck, (req, res) => {
  res.render("admin/add.hbs");
})
module.exports = router;
