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
      res.render("community.hbs", {
        communityList: communityDocuments,
        user: req.user
      });
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
    continent,
    communityManagers,
    communitySize,
    url
  } = req.body;
  console.log("commi", communityManagers);
  let communityManagersArray = communityManagers.split(",");
  console.log(communityManagersArray);
  Community.create({
    communityName,
    location,
    continent,
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

// Deleting a community
router.get("/community/:id/delete", loginCheck, (req, res, next) => {
  if (!req.user) {
    res.redirect("/");
    return;
  }
  Community.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/community");
    })
    .catch(err => {
      next(err);
    });
});

// Updating a community
router.get("/community/:id/update", loginCheck, (req, res, next) => {
  Community.findById(req.params.id).then(community => {
    console.log(community);
    res.render("admin/update.hbs", { community });
  });
});

router.post("/community/:id/update", loginCheck, (req, res, next) => {
  Community.findByIdAndUpdate(
    { _id: req.params.id },
    {
      communityName: req.body.communityName,
      communityManagers: req.body.communityManagers,
      location: req.body.location,
      communitySize: req.body.communitySize,
      url: req.body.url
    },
    { new: true }
  )
    .then(community => {
      console.log(community);
      res.redirect(`/community/${req.params.id}`);
    })
    .catch(err => {
      next(err);
    });
});

// Show or hide login, signup, logout

module.exports = router;
