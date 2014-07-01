/*

Using the JavaScript language, have the function LetterCapitalize(str) take the
str parameter being passed and capitalize the first letter of each word. Words 
will be separated by only one space. 

*/

var letterCapitalize = function(str){
  var wordArray = str.split(' '),
      temp = '',
      tempArray = [],
      i;
  for (i = 0; i < wordArray.length; i++) {
    temp = wordArray[i];
    temp = wordArray[i].charAt(0).toUpperCase() + temp.substring(1);
    tempArray.push(temp);
  }
  return tempArray.join(' ');
};
