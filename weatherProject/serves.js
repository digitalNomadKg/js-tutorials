const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const port = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/custom/index.html");
});

app.post("/", function (req, res) {

  console.log(req.body.cityName);

  const query = req.body.cityName;
  const apiKey = "b190a0605344cc4f3af08d0dd473dd25";
  const unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@01d.png";


      res.write("<h1> The weather currently " + weatherDescription + " </h1>");
      res.write("<h1> and the temperature in " + query + " is : " + temp + " degrees celcius</h1>");
      res.write("<img src =" + imageURL + ">");

      res.send();
    });
  });

});




app.listen(port, function () {
  console.log("Local server is running on port: 5000");
});