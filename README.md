# FriendFinder
Week 13 Homework
Basic:
- This node homework utilized three body-parser, express and path

- In the entry file server.js, at the very beginning required all nodes.

- In server.js, connect server using express; and require router files at line 18
```

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


```

- In the routing folder, htmlRoutes.js file is used to get the home page and survey page display; apiRoutes.js file is used to get the api pages display. In apiRoutes.js, use post to add new friend and use path to logout a single friend. 

```

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


```

- use body-parser middleware to post and push to the friends array
```

app.post("/api/new", function(req, res) {
 
  var userData = req.body;

  console.log(userData);
  friends.push(userData);
  res.json(userData);

```

- In the public folder, is the home page html and survey page html. In survery.html, use jQuery get the input from user, post a new friend first on line 263 and then start the logic code from line 269 to calculate the bestmatch.

```
if (validateForm()) {
    // Create an object for the user"s data
    userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

$.post("/api/new", userData, function(data) {
console.log(data)
});

var Bestmatch;
$.get("/api/friends", function(data) {
console.log("logging out all available friends")
console.log(data)


var SumDiffArr=[];
for(n=0;n<(data.length-1);n++){

var SumDiff = 0;
for (i=0; i<userData.scores.length; i++){
SumDiff+=Math.abs(data[n].scores[i] - userData.scores[i])
}
// console.log("SumDiff", SumDiff);
SumDiffArr.push(SumDiff);

}
console.log("SumDiffArr", SumDiffArr);

var MinDif=Math.min.apply(null, SumDiffArr);
console.log("Minimum difference score", MinDif); 

var Index = SumDiffArr.indexOf(MinDif);
Bestmatch = data[Index];
console.log("Bestmatch", Bestmatch.name);


```

- Last, use modal to display the bestmatch calculated above

```
$("#match-name").text(Bestmatch.name);
$("#match-img").attr("src", Bestmatch.photo);
// Show the modal with the best match
$("#results-modal").modal("toggle");

```
