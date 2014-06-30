/*

Using the JavaScript language, have the function SimpleAdding(num)
add up all the numbers from 1 to num. For the test cases, the parameter
num will be any number from 1 to 1000. 

*/

var simpleAdding = function(num) {
  var sum = 0,
      i;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
