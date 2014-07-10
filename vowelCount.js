var vowelCount = function(string){
  var vowels = 'aeiouAEIOU',
      counter = 0,
      i;
  for (i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) > -1 ) {
      counter = counter + 1;
    }
  }
  return counter;
};
