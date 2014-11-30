/*

Using the JavaScript language, have the function LetterChanges(str)
take the str parameter being passed and modify it using the following
algorithm. Replace every letter in the string with the letter following
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every
vowel in this new string (a, e, i, o, u) and finally return this modified string. 

*/

function LetterChanges(str) { 
  var searched = str.replace( /[a-z]/gi, function(character) {
    switch(character) {
      case 'z': return 'a';
      case 'Z': return 'A';
      default: return String.fromCharCode( 1 + character.charCodeAt(0) );
    }
  });
  // code goes here  
  return searched.replace(/aeiou+g/, function(vowel) {
    return vowel.toUpperCase();
  }); 
}

