var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

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

// A GET route for scraping the Fido website
//app.get("/restaurant", function(req, res) {
    // First, we grab the body of the html with axios

axios.get("https://www.bringfido.com/restaurant/?start=0&city=irvine_ca_us", { headers: {
    accept: "application/json, text/javascript, */*; q=0.01"
} }).then(function (response) {

    // Then, we load that into cheerio and save it to $ for a shorthand selector
    console.log(response.data);

    //var $ = cheerio.load(response.data);


})
    .catch(function (error) {
        console.log(error);
    })

// Route to post our 20 dog-friendly restaurants based on location
app.post("/restaurant", function (req, res) {

})


  
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
        })
})


// Start the server

//db.mongoose.sync({ force: true}).then(function(){
app.listen(PORT, function () {
            console.log("App running on port " + PORT + "!");
});