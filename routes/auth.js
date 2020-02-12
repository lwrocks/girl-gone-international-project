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

router.get("/admin/panel", (req, res, next) => {
  res.render("admin/panel", { user: req.user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/admin/panel",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const { username, firstname, lastname, password, accessCode } = req.body;
  // console.log("we submitted something");
  // console.log(req.body);

  if (!username) {
    // console.log("user doesnt exist");
    res.render("auth/signup.hbs", { errorMessage: "Username cannot be empty" });
    return;
  }
  if (password.length < 6) {
    // console.log("small password");

    res.render("auth/signup.hbs", {
      errorMessage: "Password must have a minimum of 6 characters."
    });
    return;
  }
  if (!accessCode) {
    console.log("no accesCode");

    res.render("auth/signup.hbs", { errorMessage: "Access code is required" });
    return;
  }
  console.log("before findind");
  User.findOne({ username: username })
    .then(user => {
      if (user) {
        console.log("we found a user");
        res.render("auth/signup.hbs", {
          errorMessage: "Username already exists"
        });
        return;
      }
      return bcrypt.hash(password, 10);
    })
    .then(hash => {
      console.log("we are about to create");
      return User.create({
        username,
        accessCode,
        firstname,
        lastname,
        password: hash
      });
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
