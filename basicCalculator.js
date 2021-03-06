// creating basic calculator using HIgh Order functions


function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  if (num2 > num1) {
    return "The " + num2 + " is bigger than number " + num1 + ". Please enter smaller number"
  } else {
    return num1 - num2;
  }
}

function mydelete(num1,num2){
return num1/num2;
}

function basicCalculator(num1, num2, operator) {
  return operator(num1, num2);

}