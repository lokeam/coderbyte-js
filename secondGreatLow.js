/*

Using the JavaScript language, have the function SecondGreatLow(arr) take
the array of numbers stored in arr and return the second lowest and second
greatest numbers, respectively, separated by a space. For example: if arr
contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not
be empty and will contain at least 2 numbers. It can get tricky if there's
just two numbers! 

*/

var secondGreatLow = function(arr){
  var sorted = arr.sort(function(a,b){
    return a - b;
  });
  var sLowest,
      sGreatest;
  if (arr.length === 2) {
    return sorted[0] + " " + sorted[1];
  }
  sGreatest = sorted[sorted.length - 2];
  sLowest = sorted[1];
  return sLowest + " " + sGreatest;
};
