/*

Using the JavaScript language, have the function NumberSearch(str)
take the str parameter, search for all the numbers in the string, add
them together, then return that final number. For example: if str is "88Hello 3World!"
the output should be 91. You will have to differentiate between single digit numbers and
multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should
return two different answers. Each string will contain at least one letter or symbol. 


*/

var numberSearch = function(str){
  var filtered = str.replace(/[^0-9]/g, ' ').split(' '),
      sum = 0,
      current,
      i;
  for (i = 0; i < filtered.length; i++) {
    current = parseInt(filtered[i],10);
    if (!isNaN(current)) {
      sum += current;
    }
  }
  return sum;
};
