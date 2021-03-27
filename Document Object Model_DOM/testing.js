
let greeting = prompt("Please enter number");
let greeting2 = prompt("Please ented float number");
let greeting3 = prompt("Please enter phrase")

let firstInteger = 4;
let firstDecimal = 4.0;
let firstString = 'HackerRank ';

let secondInteger = Math.floor(Number(greeting));
let secondDecimal = parseFloat(greeting2);
let secondString = greeting3;

let sumInteger = firstInteger + secondInteger;1

let sumDecimal = firstDecimal + secondDecimal;
let sumString = firstString + secondString;


console.log(sumInteger, sumDecimal, sumString);


var num1 = 123;
let num2 = prompt("Please enter number");

num2=Math.floor(parseFloat(num2));

let sumNum  = num1 + num2;

console.log(sumNum);


// did some logic testings

console.log(" ");
let randomNum = prompt("Please enter random nuumber");
let randomNum2 = Math.floor((Math.random() * 12));

console.log(randomNum2 + " is generated number");

let randomMultip = (randomNum * randomNum2);
console.log(randomMultip);




