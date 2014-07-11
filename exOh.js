var exOh = function(str) {
  var exCount = 0,
      ohCount = 0,
      i;
  for (i = 0; i < str.length; i++) {
    if ('xX'.indexOf(str[i]) > -1){
      exCount = exCount + 1;
    }
    if ('oO'.indexOf(str[i]) > -1) {
      ohCount = ohCount + 1;
    }
  }
  if (exCount === ohCount) {
    return true;
  } else {
    return false;
  }

};
