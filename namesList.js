/*
Tim
Angela
Mark
Bob
Jim
Lando
Retko
Amelia
Ruth
Victoria
*/


var guestList = ["Tim", "Angeala", "Kristi", "Lara", "Jason", "Mark"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[4]);


// prompt Welcome, what is your name?
// check if name is inside array, than welcome the user, if not than sorry you are not inside the list

var guestName= prompt("Hello, please enter your name");
var guestList = ["Tim", "Angela", "Kristi", "Lara", "Jason", "Mark"];
if(guestList.includes(guestName)){
  alert("Welcome to the candy shop " + guestName);
}else{
  alert("get the fuck of here " + guestName);
}