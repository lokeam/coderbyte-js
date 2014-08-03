var runLength = function(str){
  var answer = '',
      currentLtr = '',
      lastLtr = '',
      currentCount = 0,
      lastCount = 0,
      i,
      j;

  for (i = 0; i < str.length; i++) {
    currentLtr = str[i];
    for (j = 0; j < str.length; j++){
      if (currentLtr == str[j]){
        currentCount += 1;
      } 
    }
    if (lastLtr != currentLtr) {
      answer += currentLtr;
      answer += currentCount;
      lastLtr = currentLtr;
    }
    currentLtr = '';
    currentCount = 0;
  }
  return answer;
};






