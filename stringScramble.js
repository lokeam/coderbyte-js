var stringScramble = function(str1,str2){
  var current='',
      contained ='',
      i,
      j;
  for (i = 0; i < str1.length; i++) {
    current = str1[i];
    for (j = 0; j < str2.length; j++) {
      if (current.indexOf(str2) != 0) {
        contained += str2[j];
      }
      if (contained.length == str2.length ) {
        return true;
      }
    }
  }
};
