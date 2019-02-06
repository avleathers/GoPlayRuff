var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

var User = require("./models/userInfo.js");
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
mongoose.connect("mongodb://localhost/goplayruff", { useNewUrlParser: true });


////////////////////// Routes////////////////////////

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function (req, res) {
    var user = new User(req.body);
    user.setFullName();
    user.signupUpdatedDate();

    User.create(user)
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(function(err) {
            res.json(err);
        });
});


// Start the server

db.mongoose.sync({ force: true}).then(function(){
    app.listen(PORT, function () {
        console.log("App running on port " + PORT + "!");
    });
})

