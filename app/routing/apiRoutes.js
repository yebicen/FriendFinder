// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// =============================================================

var friends =
[
    {
    "name": "Ahmed",
    "photo": "https://images.ctfassets.net/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=320&h=240&fit=thumb&f=face&q=85",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
    {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
    ]
    },
    {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": [
    "5",
    "2",
    "2",
    "2",
    "4",
    "1",
    "3",
    "2",
    "5",
    "5"
    ]
    },
    {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
    "3",
    "3",
    "4",
    "2",
    "2",
    "1",
    "3",
    "2",
    "2",
    "3"
    ]
    },
    {
    "name": "Lou Ritter",
    "photo": "https://vignette.wikia.nocookie.net/jamesbond/images/8/81/James_Bond_%28Daniel_Craig%29_-_Profile.jpg/revision/latest/scale-to-width-down/350?cb=20150405210952",
    "scores": [
    "4",
    "3",
    "4",
    "1",
    "5",
    "2",
    "5",
    "3",
    "1",
    "4"
    ]
    },
    {
    "name": "Jordan Biason",
    "photo": "https://vignette.wikia.nocookie.net/shrek/images/9/9b/GoodShrekImage.png/revision/latest?cb=20171217221732",
    "scores": [
    "4",
    "4",
    "2",
    "3",
    "2",
    "2",
    "3",
    "2",
    "4",
    "5"
    ]
    },
]

// Routes
// =============================================================


// Displays all tables at api
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  

app.get("/api/friends", function(req, res) {
  return res.json(friends);

});


// Displays a single character, or returns false
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

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var userData = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newReservation.Name = newReservation.customerName.replace(/\s+/g, "").toLowerCase();

  console.log(userData);

  friends.push(userData);

  res.json(userData);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("app listening on PORT " + PORT);
});


// module.exports = app;