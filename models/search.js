const mongoose = require("mongoose");
//
const Schema = mongoose.Schema;
//
const SearchSchema = new Schema({

    website:  
        {
        type: String,
        trim: true
    },
    thumbnail:  
    {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },

    rating: {
        type: Number,
        trim: true
    },

    summary: {
        type: String,
        trim: true,
    },

    city: {
        type: String,
    },
    address: {
        type: String,
    }

});

var Search = mongoose.model("Search", SearchSchema);
module.exports = Search;
