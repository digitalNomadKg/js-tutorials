/* write a program that prints the numbers from 1 to 100. But for the multiplies of three
print  "Fizz" instead of the number and for the multiplies of five print "Buzz".
For numbers which are multiplies of both three and five print "FizzBuzz".

//.push- pushing the item into arraya, it appears at the last
// .pop - remove last item in the array

*/


output.push(0);
output.push(1);
output.push(2);
output.push(3);

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz")
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}




