const express = require("express");
const router = express.Router();
const Community = require("../models/Community");

// This one renders the map
router.get("/map", (req, res) => {
  Community.find()
    .then(communities => {
      res.render("map", { communities, user: req.user });
    })
    .catch(err => {
      next(err);
    });
});

// This shows the communities on the map
router.get("/communities", (req, res) => {
  Community.find()
    .then(communities => {
      res.json(communities);
    })
    .catch(err => {
      next(err);
    });
});

// Render full list of communities on community.hbs
router.get("/community", (req, res, next) => {
  Community.find({})
    .then(communityDocuments => {
      res.render("community.hbs", { communityList: communityDocuments });
    })
    .catch(err => {
      next(err);
    });
});

// Display an individual community on communityDetail.hbs
router.get("/community/:id", (req, res, next) => {
  Community.findById(req.params.id)
    .then(communityDocument => {
      res.render("communityDetail.hbs", communityDocument);
    })
    .catch(err => {
      next(err);
    });
});

// Variable to check if user is logged in
const loginCheck = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

// Adding a new community
router.get("/admin/add", loginCheck, (req, res) => {
  res.render("./admin/add.hbs");
});

router.post("/community", loginCheck, (req, res, next) => {
  const {
    communityName,
    location,
    communityManagers,
    communitySize,
    url
  } = req.body;
  console.log('commi', communityManagers)
  let communityManagersArray = communityManagers.split(",");
  console.log(communityManagersArray);
  Community.create({
    communityName,
    location,
    communityManagers: communityManagersArray,
    communitySize,
    url
  })
    .then(() => {
      res.redirect("/community");
    })
    .catch(err => {
      next(err);
    });
});

// Updating a community


module.exports = router;
