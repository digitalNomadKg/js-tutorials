const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ embeded: true }));


app.listen(port, function () {
  console.log("The local server is running on port:4000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "/style.css");
});


app.post("/", function (req, res) {

  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  console.log("Hello it is workign");

  let bmi = Math.floor(weight / Math.pow(height, 2));

  if (bmi < 18.5) {
    res.send("Your BMI is " + bmi + ", so you are underweight.");
  }

  if (bmi === 18.5 && 24.9) {
    res.send("Your BMI is " + bmi + ", so you have normal weight.");
  }
  if (bmi > 24.9) {
    res.send("Your BMI is " + bmi + ", so you are overweight.");
  }
  else {
    return bmi;
  }
});

