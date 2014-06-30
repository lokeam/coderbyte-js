/*

Using the JavaScript language, have the function FirstFactorial(num)
take the num parameter being passed and return the factorial of it
(ie. if num = 4, return (4 * 3 * 2 * 1))

*/

var firstFactorial = function(num) {
  var fArray = [];
  if (num == 0 || num == 1){
    return 1;
  }
  else if (fArray[num] > 0) {
    return fArray[num];
  }
  return fArray[num] = firstFactorial(num - 1) * num;
};
