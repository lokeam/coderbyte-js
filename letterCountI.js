
/*

Using the JavaScript language, have the function LetterCountI(str) take
the str parameter being passed and return the first word with the greatest
number of repeated letters. For example: "Today, is the greatest day ever!"
should return greatest because it has 2 e's (and 2 t's) and it comes before
ever which also has 2 e's. If there are no words with repeating letters return -1.
Words will be separated by spaces. 

*/

var letterCount = function(str){
  var wordArray = str.split(' '),
      count = 0,
      greatestN = 0,
      greatestW = '',
      currentWord = '',
      currentLtr = '',
      i,
      j,
      k;
  for (i = 0; i < wordArray.length; i++) {
    currentWord = wordArray[i];
    for (j = 0; j < currentWord.length; j++) {
      currentLtr = currentWord[j];
      for (k = 0; k < currentWord.length; k++) {
        if ( (k != j) && (currentLtr == currentWord[k]) ) {
          count = count + 1;
        }
      } 
    }
    if (count > greatestN) {
      greatestN = count;
      greatestW = currentWord;
    }
  }
  if (greatestN > 0){
    return greatestW;
  } else {
  return '-1';
  }
}; 
