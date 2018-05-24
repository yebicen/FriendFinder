// Dependencies

var path = require("path");
var friends= require("../data/friends")



// =============================================================

module.exports = function(app) {

  
app.get("/api/friends", function(req, res) {
  return res.json(friends);

});


// Displays a single friend, or returns false
app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;
  

  console.log(chosen);

  for (var i = 0; i < friends.length; i++) {
    if (chosen === friends[i].name) {
      return res.json(friends[i]);
    }
  }

  return res.json(false);
});

// Create New friends - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var userData = req.body;

  console.log(userData);

  friends.push(userData);

  res.json(userData);


  
});



}