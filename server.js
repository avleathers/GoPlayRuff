var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// It works on the client and on the server


// Require all models
var db = require("./models");


var PORT = process.env.PORT || 3001;
// var PORT = 3000;
var app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
//////////Routes//////////
require("./routes/account-api")(app);
require("./routes/scrapping-api")(app);


////////////

if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}
  
// Connect to the Mongo DB via production server or development
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/goplayruff");




// Start the server

    // app.listen(PORT, function () {
        // console.log("App running on port " + PORT + "!");
    // });
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
