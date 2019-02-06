var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

var User = require("./models/userInfo");
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/(db name)", { useNewUrlParser: true });




////////////////////// Routes////////////////////////

// Route to post our form submission to mongoDB via mongoose



db.userInfo.create({ name: "User Information"})
    .then(function(dbuserInfo) {
        console.log(dbuserInfo)
    })
    .catch(function(err) {
        console.log(err.message);
    })



app.post("/submit", function(req, res) {
  // Create a new user using req.body

  var user = new User(req.body);
  user.setFullName();
  user.lastUpdatedDate();

  User.create(user)
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});




















// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
