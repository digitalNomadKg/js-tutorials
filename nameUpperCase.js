var name = "Tim Kirves";
name = name.toUpperCase();
name = name.toLowerCase();


var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar= firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var lowerCaseAll = restOfName.toLowerCase();
var capitalisedName = upperCaseFirstChar + lowerCaseAll;
alert ("Hello, " + capitalisedName);