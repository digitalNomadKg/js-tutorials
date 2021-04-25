const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello node.js</h1>");
});

app.get("/contact", function(req, res){
res.send("Please contact me at tim.kirves[at]gmail.com");
});


app.get("/about", function(req, res){
res.send("<h2><i>Hello my name is Tim Kirves, I am junior wed developer testing node.js, I do like doing backend in node.js</i></h2>");
});


app.get("/hobbies", function(req, res){
  res.send("I do like coding coding coding and one more coding. Coding is super cool")
  
})

app.listen(3200, function(){
  console.log("Server has started on port 3200")
});
