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

//////////////////////////////////////////////////////////////////////////////////

var output = [];
var count = 0;

function fizzBuzz() {
  output.push(count);
  count++;  

  console.log(output);
}






