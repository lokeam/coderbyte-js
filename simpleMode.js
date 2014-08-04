var simpleMode = function(arr){
  var holder = [],
      currentCount = 1,
      max = 0,
      mostFrequent,
      i,
      j;
  for (i = 0; i < arr.length; i++){
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]){
        currentCount = currentCount + 1;
        if (currentCount > max) {
          max = currentCount;
          mostFrequent = arr[j];
        }
      }
    }
    currentCount = 1;
  } 
  return mostFrequent;
};
