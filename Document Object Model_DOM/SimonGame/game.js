
let gamePattern = [];
gamePattern= gamePattern.push();

let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = nextSequence(buttonColours);

function nextSequence() {
  randomNumber = (Math.floor(Math.random()*3) + 1);
  console.log(randomNumber);
};
nextSequence();


$("#green").click(function(){
  var addAudio = new Audio("sounds/green.mp3");
  addAudio.play();
});

$("#red").click(function(){
  var addAudio = new Audio("sounds/red.mp3");
  addAudio.play();
});

$("#blue").click(function(){
  var addAudio = new Audio("sounds/blue.mp3");
  addAudio.play();
});

$("#yellow").click(function(){
  var addAudio = new Audio("sounds/yellow.mp3");
  addAudio.play();
});




// // $("button").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
