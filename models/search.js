var mongoose = require("mongoose");
//
var Schema = mongoose.Schema;
//
var SearchSchema = new Schema({

    website:  
        [{
        url: String,
        image: String}
    ],

    name: {
        type: String,
        trim: true
    },

    rating: {
        type: double,
        trim: true
    },

    summary: {
        type: String,
        trim: true,
    },

    address: {
        type: String,
    }

});

/////// Instance Methods for fullname ///////////

var Search = mongoose.model("Search", UserSchema);
module.exports = Search;
