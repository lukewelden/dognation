// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const flash = require("express-flash");

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
// Import Passport config
require("./config/passport");

// Session Config
app.use(
  session({
    secret: "somerandomsecret",
    cookie: {
      maxAge: (1000 * 60 * 60 * 24 * 365), // Max age of a year in milliseconds
      secure: false,
    },
    resave: false,
    saveUninitialized: false,
    sameSite: "none",
    secure: true,
  })
)
app.use(flash());

// Passport Config
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  const user = req.user || "Guest";
  res.render("home", { user });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
