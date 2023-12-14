const express = require("express");
const router = express.Router();
const helper = require("../helpers/helper");
const passport = require("passport");
const filename = "./data/users.json";
const bcrypt = require("bcrypt");
let users = require("../data/users.json");

// Register New User:
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const id = { id: helper.getNewId(users) };
  try {
    const user = await helper.userExists(username);
    if (user) {
      // Flash a message to the user
      req.flash("error", "Username already taken");
      return res.redirect("/users/register");
    }
    // Hash password before storing in local DB:
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = { ...id, username, password: hashedPassword };

    // Store new user in local DB
    await users.push(newUser);
    await helper.writeJSONFile(filename, users);

    res.redirect("login");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Log In User:
router.post("/login", (req, res) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })(req, res);
});

// Log out user:
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/register", (req, res) => {
  res.render("register", { error: req.flash("error") });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
