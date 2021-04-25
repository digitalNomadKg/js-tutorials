const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;

app.listen(process.env.PORT || port, function () {
  console.log("Local host is running on port: 9000");
});

const https = require("https");
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(__dirname + '/public'));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });


app.post("/", function (req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;


  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_field: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us1.api.mailchimp.com/3.0/lists/18c6f1b5c3";

  const options = {
    method: "POST",
    auth: "timKirves:247228949bb8742030794e5f8cf195f0-us1"
  }

  const request = https.request(url, options, function (response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }


    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });

  });

  request.write(jsonData);
  request.end();
  console.log("User has been added");
});


app.post("/failure", function (req1, res1) {
  res1.redirect("/");
});


app.post("/success", function (req2, res2) {
  res2.redirect("/login");
})

// app.get("/login", function (req, res) {
//   res.sendFile(__dirname + "/login.html");
// });