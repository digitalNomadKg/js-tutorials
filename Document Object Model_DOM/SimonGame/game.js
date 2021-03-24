

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

$("#green").click(function () {
  var addAudio = new Audio("sounds/green.mp3");
  addAudio.play();
});

$("#red").click(function () {
  var addAudio = new Audio("sounds/red.mp3");
  addAudio.play();
});

$("#blue").click(function () {
  var addAudio = new Audio("sounds/blue.mp3");
  addAudio.play();
});

$("#yellow").click(function () {
  var addAudio = new Audio("sounds/yellow.mp3");
  addAudio.play();
});

// let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();


function animatePress(currentColour) {
  $("#").addClass("pressed");
  console.log("this is working")
}
