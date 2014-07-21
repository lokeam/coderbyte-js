var swapCase = function(str){
  var strArray = str.split(''),
      i;
  for (i = 0; i < strArray.length; i++) {
    if (strArray[i] != strArray[i].toLowerCase()) {
      strArray[i] = strArray[i].toLowerCase();
    }
    else {
      strArray[i] = strArray[i].toUpperCase();
    }
  }
  return strArray.join('');
}
