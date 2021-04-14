const express = require("express");
const https = require("https");

const port = 5000;
const app = express();

app.get("/", function (req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=b190a0605344cc4f3af08d0dd473dd25&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<p> The weather currently " + weatherDescription + " </p>");
      res.write("<h1> and the temperature in Bishkek is : " + temp + " degrees celcius</h1>");
      res.write("<img> src " + imageURL + ">");

      res.send();
    });
  });
});












app.listen(port, function () {
  console.log("Local server is running on port: 5000");
});