function StringScramble(str1,str2) {
  var char_index = 0;
  for (var i = 0; i < str2.length; i++) {
    char_index = str1.indexOf(str2.charAt(i));
  if ( char_index === -1) {
    return false;
  } else {
  str1 = str1.substring(0, char_index) + str1.substring(char_index + 1);
  }
}
return true;
}
