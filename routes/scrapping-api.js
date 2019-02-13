var db = require("./models");

module.exports = function(app) {


    app.get("/lorizdata", function(req, res) {
        axios.get("https://www.bringfido.com/restaurant/?start=0&city=irvine_ca_us", { headers: {
        accept: "application/json, text/javascript, */*; q=0.01"
        } }).then(function (response) {
    
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        console.log(response.data.results);
    
        var result = response.data.results;
        //Grab the website.url, website.image, name,rating, summary & address for the 20 dog-friendly restaurants searched
        for (var i=0; i<20; i++) {
    
        // Add the text and href of every link, and save them as properties of the result object
            var searchresults = {};
    
            searchresults.website = result[i].website;
            searchresults.thumbnail = result[i]['thumbnail@3x'];
            searchresults.name = result[i].name;
            searchresults.rating = result[i].rating;
            searchresults.summary = result[i].summary;
            searchresults.city = result[i].city.short_name;
            searchresults.address = result[i].address;
            
            //save to database Search
            db.Search.create(searchresults)
                 .then(function(dbSearch) {
            // View the added result in the console
                console.log(dbSearch);
                })
                .catch(function(err) {
            // If an error occurred, log it
             console.log(err);
            });
    
        }
          // Send a message to the client (Test only)
          res.send("Scrape Complete");
        });
      });
    
    // Route for getting all restaurants from the db
    app.get("/go/search", function(req, res) {
        // Grab every document in the search restaurants collection
        db.Search.find({})
          .then(function(dbSearch) {
            res.json(dbSearch);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      });
    
    // Route to post our 20 dog-friendly restaurants based on location
    app.post("/go/restaurants", function (req, res) {
        restaurant = new Search(req.body);
    
        Search.create(restaurant)
            .then(function(dbUser) {
                res.json(dbUser);
            })
            .catch(function(err) {
                res.json(err);
            })
    })
    
    // Route for getting all restaurants from the db based on location
    app.get("/restaurants/:id", function(req, res) {
        // Grab every dog-friendly in the Search collection
        db.Search.find({})
          .then(function(db) {
            // If we were able to successfully find dog friendly restaurants & send back to the client
            res.json(dbSearch);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      });
      

}

