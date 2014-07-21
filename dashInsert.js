var dashInsert = function(num){
  var numStr = num+'',
      repos = [],
      i;
  numStr = numStr.split('');
  for(i = 0; i < numStr.length; i++){
    repos.push(numStr[i]);
    if (numStr[i] % 2 !== 0 && numStr[i + 1] % 2 === 1){
      repos.push('-');
    }
  };
  return repos.join('');
};
