//random number generator

// var n = Math.random();
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1; //pseudo number generator
console.log(n);


// LoveCalculator


prompt("What it is your name?")
prompt("What it is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%" + "you love each other like me and ma babe");
}
if (loveScore > 30 && loveScore <= 70) {

  alert("Your loveScore is " + loveScore + "%")
}
if (loveScore <= 30) {
  alert("Your loveScore is " + loveScore + "%" + "you go together like Romeo and Juliet");

} else {
  alert("Your love score is " + loveScore + "%");
}

// comparators
/*
=== is equal to
!== is  not equal to
> greater than
< less than
>= is greater or equal to
<= is less than or equal to


&& AND
|| or
! not

*/

