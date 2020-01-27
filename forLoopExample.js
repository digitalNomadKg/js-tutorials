// example with "for" loop

/*

for(i=0; i<2; i++){
  //do something
}

 */

//////////example///////////

var output = [];


function fizzBuzz() {

  for (var count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");

    } else if (count % 3 === 0) {
      output.push("Fizz");

    } else if (count % 5 === 0) {
      output.push("Buzz");

    } else {
      output.push(count);
    }
  }
  console.log(output);
}


/**
 * while loop- state
 * for loop - iterate
 */