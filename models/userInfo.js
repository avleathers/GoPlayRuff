var mongoose = require("mongoose");
//
var Schema = mongoose.Schema;
//
var UserSchema = new Schema({


    username: {
        firstname: {
            type: String, 
            trim: true, 
            required: "Firstname is required"           
        },

        lastname: {
            type: String, 
            trim: true,
            required: "Lastname is required"
        },

        required: "Username is required"   , 
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password must be longer than 6 characters."
        ]
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
      userCreated: {
        type: Date,
        default: Date.now
      },

});





var User = mongoose.model("User", UserSchema);
module.exports = User;
