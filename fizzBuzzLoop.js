// fizzBuzz with while loop
/* 

while(smt is true){
  do something
}

*/

// basic example
var i = 1;
while (i < 2) {
  console.log(i);
  i++;
}


// FizzBUzz using while loop

var output = [];
var count = 1;

function fizzBuzz() {

  while (count <= 250) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");

    } else if (count % 3 === 0) {
      output.push("Fizz");

    } else if (count % 5 === 0) {
      output.push("Buzz");

    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}