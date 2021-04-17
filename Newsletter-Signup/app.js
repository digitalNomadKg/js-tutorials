//jsinit esversion: 6

const express = require("express");
const port = 3000;
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function (req, res) {
  res.sendFile(__dirname, + "/index.html");
});







app.listen(port, function () {
  console.log("Local host is running on port: 3000");
})
