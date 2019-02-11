const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;

// const User = require("./models/userInfo.js");
// const Score = require("./models/userScore.js")
const app = express();
const db = require("./models")
//require("./routes/user_api")(app);

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


//require("./routes/user_api.js")(api);
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/goplayruff", { useNewUrlParser: true });


////////////////////// Routes////////////////////////

// MISSY commented out the code below since we are using axios.

// app.get("/users", function(req, res) {
//   db.userInfo.find({})
//   .then(function(dbUser) {
//     res.json(dbUser);
//   })
//   .catch(function(err) {
//     res.json(err);
//   });
// });

// app.post("/", function(req, res) {
//   db.userInfo.create(req.body)
//     .then(function(dbUser){
//       return db.userInfo.findOneAndUpdate({}, { $push: { users: dbUser._id}}, { new: true});
//     })
//     .then(function(dbUser) {
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// })






// Start the server

app.listen(PORT, function () {
  console.log("App running on port " + PORT + ".");
});

