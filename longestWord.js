/*

Using the JavaScript language, have the function LongestWord(sen) take
the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first
word from the string with that length. Ignore punctuation and assume sen
will not be empty. 

*/

var longestWord = function(sen) {
  var longestCounter = 0,
      longestWord = '',
      wordArray = sen.split(' '),
      i;
  for (i = 0; i < wordArray.length; i++){
  	if (wordArray[i].length > longestCounter) {
  		longestCounter = wordArray[i].length;
  		longestWord = wordArray[i];
  	}
  }
  return longestWord;
};
