/*

Using the JavaScript language, have the function TimeConvert(num) take the num
parameter being passed and return the number of hours and minutes the parameter
converts to (ie. if num = 63 then the output should be 1:3). Separate the number
of hours and minuteswith a colon. 

*/

var timeConvert = function(num){
  var hr = Math.floor(num / 60),
      min = num % 60,
      total = hr + ":" + min;
  return total;
};
