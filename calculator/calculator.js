const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded());
const port = 3000;


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
res.send("Thank you for choosing our calculator");
})

app.listen(port, function(){
  console.log("Localhost is running on: 3000");
});


