// Route for creating account
var db = require("../models");
var axios = require("axios");

module.exports = function(app) { 
    app.get("/users", function(req, res) {
        db.userInfo.find({})
        .then(function(dbUser) {
          res.json(dbUser);
        })
        .catch(function(err) {
          res.json(err);
        });
      });
      
      
      
      
      app.post("/post/users", function(req, res) {
        console.log(req.body);
        db.userInfo.create(req.body)
          .then(function(dbUser){
            return db.userInfo.findOneAndUpdate({}, { $push: { users: dbUser._id}}, { new: true});
          })
          .then(function(dbUser) {
            res.json(dbUser);
          })
          .catch(function(err) {
            res.json(err);
          });
      })
      
}
