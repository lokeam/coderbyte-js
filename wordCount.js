var wordCount = function(string) {
  var wordArray = string.split(' '),
      count = 0,
      i;
  for (i = 0; i < wordArray.length; i++) {
    count += 1;
  }
  return count;
};
