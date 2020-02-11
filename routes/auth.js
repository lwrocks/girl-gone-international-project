const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const { username, password, accessCode } = req.body;

  if (!username) {
    res.render("auth/signup.hbs", { errorMessage: "Username cannot be empty" });
    return;
  }
  if (password.length < 6) {
    res.render("auth/signup.hbs", {
      errorMessage: "Password must have a minimum of 6 characters."
    });
    return;
  }
  if (!accessCode) {
    res.render("auth/signup.hbs", { errorMessage: "Access code is required" });
    return;
  }
  User.findOne({ username: username })
    .then(user => {
      if (user) {
        res.render("auth/signup.hbs", {
          errorMessage: "Username already exists"
        });
        return;
      }
      return bcrypt.hash(password, 10);
    })
    .then(hash => {
      return User.create({ username: username, password: hash });
    })
    .then(createdUser => {
      console.log(createdUser);

      req.session.user = createdUser;
      res.redirect("/");
    })
    .catch(err => {
      next(err);
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
