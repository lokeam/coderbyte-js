/*

Using the JavaScript language, have the function LetterChanges(str)
take the str parameter being passed and modify it using the following
algorithm. Replace every letter in the string with the letter following
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every
vowel in this new string (a, e, i, o, u) and finally return this modified string. 

*/

var letterChanges = function(str) {
  var letters =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      vowels = 'aeiou',
      charArray = str.split(''),
      changed = [],
      i,
      j,
      k;
  for (i = 0; i < charArray.length; i++ ) {
  	for (j = 0; j < letters.length; j++) {
  		if (charArray[i] == letters[j]) {
  			k = letters.indexOf(letters[j]) + 1;
  			if ( vowels.indexOf(letters[k]) != -1 ) {
  				letters[k] = letters[k].toUpperCase();
  			}
  			changed.push(letters[k]);
  		}
  	}
  }
  return changed.join('');
};
