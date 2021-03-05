
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
//--------------------------------------------------------------------------
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "imgs/" + randomDiceImage; //imgs/dice1.png - imgs/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//---------------------------------------------------------------------------

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "imgs/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" 🚩Play 1 wins!"
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Play 2 wins! 🚩"

}else{
  document.querySelector("h1").innerHTML="Draw again!"
}

//---------------------------------------------------------------------------