// $(document).ready(function(){
//   alert("Jquery is working now");
// })

let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = [nextSequence(buttonColours)];

function nextSequence() {
  let randomNumber = Math.floor((Math.random() * 3) + 1);
}

gamePattern.push(randomChosenColour);

