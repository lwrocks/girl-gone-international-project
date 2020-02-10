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

module.exports = router;
